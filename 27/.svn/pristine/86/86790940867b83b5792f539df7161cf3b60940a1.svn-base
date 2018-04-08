#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netdb.h>
#include <unistd.h>
#include <arpa/inet.h>
// Demo: Connect to this server. Quit and Restart the server. Watch bind() fail
//
int main(int argc, char** argv)
{
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
        buffer[len] = '\0';

        printf("Read %d chars\n", len);
        printf("===\n");
        printf("%s\n", buffer);
        
        char* mesg = "HTTP/1.0 200 OK\r\nContent-Type: text/html\r\nConnection: close\r\n\r\nHello World";
        
        write(client_fd,mesg, strlen(mesg));
        
        shutdown( client_fd,  SHUT_RDWR);
        close(client_fd);
     }


    return 0;
}
