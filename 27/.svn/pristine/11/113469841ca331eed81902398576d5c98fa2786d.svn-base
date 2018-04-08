#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netdb.h>
#include <unistd.h>
#include <arpa/inet.h>
#include <ifaddrs.h>

//https://github.com/angrave/SystemProgramming/wiki/Networking%2C-Part-5%3A-Reusing-ports#getnameinfo-example-whats-my-ip-address
void printmyip(int required_family) {
    // required_family = AF_INET6 or AF_INET; // Change to AF_INET6 for IPv6
    struct ifaddrs *myaddrs, *ifa;
    getifaddrs(&myaddrs);
    char host[256], port[256];
    for (ifa = myaddrs; ifa != NULL; ifa = ifa->ifa_next) {
        int family = ifa->ifa_addr->sa_family;
        if (family == required_family && ifa->ifa_addr) {
            if (0 == getnameinfo(ifa->ifa_addr,
                                (family == AF_INET) ? sizeof(struct sockaddr_in) :
                                sizeof(struct sockaddr_in6),
                                host, sizeof(host), port, sizeof(port)
                                 , NI_NUMERICHOST | NI_NUMERICSERV  )) {
                puts(host);
            }
        }
    }
}


int main(int argc, char** argv)
{
    printmyip(AF_INET);

    int s;
    int sock_fd = socket(AF_INET, SOCK_STREAM, 0);

    struct addrinfo hints, *result = NULL;
    memset(&hints, 0, sizeof(struct addrinfo));
    hints.ai_family = AF_INET;
    hints.ai_socktype = SOCK_STREAM;
    hints.ai_flags = AI_PASSIVE;

    s = getaddrinfo(NULL, "0", &hints, &result);
    if (s != 0) {
        fprintf(stderr, "getaddrinfo: %s\n", gai_strerror(s));
        exit(1);
    }
    // New: Reuse port-
    int optval = 1;
    setsockopt(sock_fd, SOL_SOCKET, SO_REUSEPORT, &optval, sizeof(optval));
 
    if ( bind(sock_fd, result->ai_addr, result->ai_addrlen) != 0 )
    {
        perror("bind()");
        exit(1);
    }


    if ( listen(sock_fd, 10) != 0 )
    {
        perror("listen()");
        exit(1);
    }

    struct sockaddr_in * result_addr = (struct sockaddr_in*) result->ai_addr;
    printf("Listening on file descriptor %d, port %d\n", sock_fd, ntohs(result_addr->sin_port));

// But we can get the port number from the server sock_fd!
    struct sockaddr_in sin;
    socklen_t socklen = sizeof(sin);
    if (getsockname(sock_fd, (struct sockaddr *)&sin, &socklen) == -1)
      perror("getsockname");
    else
      printf("Real port number %d\n", ntohs(sin.sin_port));  



    int clientcount = 0;

    while(1) {
        printf("Waiting for connection...\n");


        struct sockaddr_in client_info;
        socklen_t size = sizeof(client_info);

        int client_fd = accept(sock_fd, (struct sockaddr*) &client_info, &size); 

  
        char *connected_ip= inet_ntoa(client_info.sin_addr);
  // ^^^^ Does this look thread-safe to you?
        
        int port = ntohs(client_info.sin_port);
        printf("Client %s port %d\n", connected_ip, port);

        char buffer[1000];
        read(client_fd, buffer, sizeof(buffer)-1);

        clientcount++;

        dprintf(client_fd,"HTTP/1.0 200 OK\r\nContent-Type: text/html\r\n\r\n");
        dprintf(client_fd,"<html><body><h1>");
        dprintf(client_fd,"Congratulations you are client number %d; you won!\n", clientcount);
        sleep(1);
        dprintf(client_fd,"Your IP is %s and your port number is %d",connected_ip,port);
        dprintf(client_fd,"</h1></body></html>");
        
        shutdown(client_fd , SHUT_RDWR);

        close(client_fd);
     }

    return 0;
}
