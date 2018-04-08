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

    struct addrinfo hints, *result;
    memset(&hints, 0, sizeof(struct addrinfo));
    hints.ai_family = AF_INET;
    hints.ai_socktype = SOCK_STREAM;
    hints.ai_flags = AI_PASSIVE;

    s = getaddrinfo(NULL, "1234", &hints, &result);
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

    while(1) {
        printf("Waiting for connection...\n");
        int client_fd = accept(sock_fd, NULL, NULL);
        printf("Connection made: client_fd=%d\n", client_fd);

        char buffer[1000];
        int len = read(client_fd, buffer, 999);
        if(len >0) {
            buffer[len] = '\0';
            printf("%s\n", buffer);
        }
        
        FILE*file = fopen("apicture.jpg","r");
        if(file) {
          fseek(file,0, SEEK_END);
          long size = ftell(file);
          fseek(file,0,SEEK_SET);
          printf("Sending %ld bytes\n", size);

          char*buf = malloc(size);
          fread(buf,1,size,file);

          char response[2048];
          
          sprintf( response, "HTTP/1.0 200 OK\r\n"
            "Content-Type: image/jpeg\r\n"
            "Content-Length: %ld\r\n\r\n" , size);

          write(client_fd, response, strlen(response));
          
          write(client_fd, buf, size);
          fclose(file);
          free(buf);
        }		
        shutdown(client_fd , SHUT_RDWR);
        close(client_fd);
    }
    return 0;
}
