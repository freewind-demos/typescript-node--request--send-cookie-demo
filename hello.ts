import request, {Response} from 'request';

const jar = request.jar();
jar.setCookie('cookie1=value1', 'http://postman-echo.com');

request("http://postman-echo.com/get", {
  jar: jar
}, (error: any, response: Response, body: any) => {
  console.log(body);
})
