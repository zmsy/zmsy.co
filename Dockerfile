FROM nginx

ENV WORK_DIR /app

COPY . ${WORK_DIR}