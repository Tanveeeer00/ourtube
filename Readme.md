# OURTUBE

## A backend for ourtube

A Link for an model.

- [Model Link](https://app.eraser.io/workspace/avuOC0C7bUWt4GK3hfM2?origin=)

## refresh and access token

The job of refresh token and accesss token that user do not need to login again again that's why we store token so we can give direct access to the user.
refresh toen also known as a session token.
refresh has long life as compared to access token(access has short live).
refresh token saved in database too, so whenever access token will expire then we can able to request for new access token through refresh token.
there are some steps :

- grab refresh token from frontend through cookie `req.cookie.refreshToken`
- now decode that refresh token
- call db and find that token
- verify it
- if everything will fine then generate new access token
