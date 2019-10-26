---
id: http
title: Http
---

`Http` class can be used to make http calls over the connected Wi-Fi network.  
It operates in completely asynchronous fashion to prevent lock ups and is designed with ease of use in mind.

To make an http call, create an instance of `Http` class as follows:
```C++
Http request = Http("example.com");
```
The prototype of the `Http` class constructor is as follows:
```C++
Http(const char* host, int port = 80);
```
<br/>
Once the `Http` class object is instantiated, we can make `GET`, `POST`, `PUT`, `DELETE` requests with the following function respectively: 
```C++
void get(const char* path);
```
```C++
void post(const char* path, const char* body = NULL);
```
```C++
void put(const char* path, const char* body = NULL);
```
```C++
void del(const char* path, const char* body = NULL);
```
In these the `path` is the path of the endpoint relative to host (for example, `/` or `/users/2`),  
and `body` takes a const char string for the request body.  
<br/>
To add any header to the request, use:
```C++
void addHeader(const char* header);
```
<br/>
To set the `Content-Type` for the request, use:
```C++
void setContentType(const char* content_type);
```
<br/>
To get the data that is returned from the response, you can use:
```C++
void writeResponseTo(char* response);
```
This takes as parameter the pointer to a char array where the response is written once returned from the network request.  
<br/>
Once the request is made by calling one of the `get`, `post`, `put` or `del` methods, the status of the request can be checked asynchronously using:
```C++
bool isComplete();
```
Which returns a bool indicating whether the request is complete or not, successfully or otherwise.

```C++
int getStatus();
```
This returns the status code of the reponse returned.  
If the request is not complete yet or fails, then one of the below #define'ed constants may also be returned:  

`HTTP_INTIALIZE`  
`HTTP_WAITING_TO_CONNECT`  
`HTTP_WAITING_FOR_RESPONSE`  
`HTTP_OUT_OF_MEMORY`  
`HTTP_CONNECTION_ERROR`  
`HTTP_INVALID_RESPONSE`  
`HTTP_DISCONNECTED_BEFORE_RESPONSE`  
`HTTP_TIMEOUT`  
