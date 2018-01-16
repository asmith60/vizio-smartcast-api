FROM arm32v7/node:8.9.4

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY dist dist

EXPOSE 8000

ENTRYPOINT ["npm"]

CMD ["start"]
