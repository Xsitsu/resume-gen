FROM node

ADD package.json .
RUN npm install
ADD .nuxt .nuxt
EXPOSE 3000
VOLUME [ "/resumes" ]


ENTRYPOINT bash -c "npm run start"

