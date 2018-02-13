FROM node:8.5.0

ARG BACKSTOPJS_VERSION

ENV \
	CHROME_VERSION=64 \
	PHANTOMJS_VERSION=2.1.7 \
	CASPERJS_VERSION=1.1.4 \
	SLIMERJS_VERSION=0.10.3 \
	BACKSTOPJS_VERSION=$BACKSTOPJS_VERSION \
	# Workaround to fix phantomjs-prebuilt installation errors
	# See https://github.com/Medium/phantomjs/issues/707
	NPM_CONFIG_UNSAFE_PERM=true

# Base packages
RUN apt-get update && \
	apt-get install -y --no-install-recommends git sudo && \
	apt-get clean

RUN sudo npm install -g --unsafe-perm=true --allow-root phantomjs@${PHANTOMJS_VERSION}
RUN sudo npm install -g --unsafe-perm=true --allow-root casperjs@${CASPERJS_VERSION}
RUN sudo npm install -g --unsafe-perm=true --allow-root slimerjs@${SLIMERJS_VERSION}
RUN sudo npm install -g --unsafe-perm=true --allow-root backstopjs@${BACKSTOPJS_VERSION}

RUN wget https://dl-ssl.google.com/linux/linux_signing_key.pub && sudo apt-key add linux_signing_key.pub
RUN sudo sh -c "echo 'deb http://dl.google.com/linux/chrome/deb/ stable main' >> /etc/apt/sources.list"

RUN	apt-get update -y && \
	apt-get install -y --no-install-recommends google-chrome-stable && \
	apt-get clean

RUN apt-get install -y --no-install-recommends firefox-esr

WORKDIR /src

ENTRYPOINT ["backstop"]
