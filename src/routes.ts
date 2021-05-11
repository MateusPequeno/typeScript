import { Request, Response } from 'express';
import createUser from './services/createUser';
export function helloWorld(request: Request,response: Response){
  const user = createUser({name:'Mateus',
  email:'wonaapack@gmail.com',
  password:'111222',
  techs: ['nodejs','react','reactnative',
  {title: 'JavaScript', experience: 100},
  ],
});
  console.log(user.email);
  return Response.json({ message: 'olá mundo'})
}