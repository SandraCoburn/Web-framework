# Web-framework

Build a Client Side Web Framework - TypeScript

## Tech Stack

- JavaScript
- TypeScript

## Planning and Implementation

- Parcel Set up

  - ` npm install -g parcel-bundler`

- Model Classes -> Handle data, used to represent Users, Blog Posts, Images, et
  - Class to represent a User and all of its data
  - User Class needs to have the ability to store data, retrieve it, and change it
  - User needs to have the ability to notify the rest of the app when some data is changed
  - User needs to be able to persist data to an outside server and then retrieve it
  ***
  | class User                              |
  | --------------------------------------- |
  | private data: UserProps                 |
  | get(propName: string):                  |
  | set(update: UserProps): void            |
  | on(eventName: string, callback: ()=>{}) |
  | trigger(eventName:string): void         |
  | fetch(): Promie                         |
  | save(): Promise                         |
  |                                         |
- View Classes -> Handle HTML and events caused by user(like clicks)
- Extraction Approach
  - Build a class User as a 'mega' class with tons of methods
  - Refactor User to use composition
  - Refactor User to be a reusable class that can represent any piece of data, not just a User
