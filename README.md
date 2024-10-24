# ForMe frontend

This is purely the frontend mock for the app. 

Backend can be found here: https://github.com/Vulp0/forme-backend. 

No hosting as of yet.

### Installation

* Navigate to a new directory then run `git clone https://github.com/Vulp0/forme-frontend client`
* Go into the client folder and run `npm install`
* You're done, start the server with `npm run dev` (or use `npm run dev -- --host` if you want it to not just run on localhost)

### Usage

Most pages are not accessible with links/buttons, for now here's a list of all pages/routes:
* Home: `/`
* Log in: `/login`
* Registration: `/signup`
* Search/Browse all: `/browse`
* A template: `/template/id` (ie. `/template/kw92998rt`, anything will work for now)
* Dashboard: `/dashboard`
* Create a template: `/create` (note: templates and their results show a few fields and not all 16 to avoid extremely long placeholder code)
* User list: `/management`
* My templates: `/mytemplates`
* Comments received: `/comments`
* Forms received: `/results`