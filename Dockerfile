FROM node
WORKDIR /app
ADD . .
RUN npm install
RUN nuxt build
EXPOSE 3000
VOLUME [ "/resumes" ]


ENTRYPOINT bash -c "npm run start"

