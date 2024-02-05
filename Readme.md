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

## Aggregation pipeline

- An aggrregation pipeline is some sort of stage. like we take some input and process it and get output from it, now that output is the original data.

### Example

- We have 100 pens in 3 different color (blue,red,black). now we want to know how many blue pens is there.
- we will use some methods like filter or reduce
- we get 25 blue pens. so the point is that 25 pens now our original data. we have nothing to do with 75 pens. if we execute any function that will only apply on 25 pens.

## $Match

- In mongo db, it's a syntax which can compare some different property and filter out.

## $lookup

- In mongo db, it's a syntax which can join in collection of db and filter too.

## $addfield

- In mongo db, it's a syntax which can add new field in the output which is came out from others.

## $size

- In mongo db, it's a syntax which can count the size of the output.

## $in

- In mongo db, it's a syntax which can check that data is present in result or not

## $cond

- In mongo db, it's a syntax which can put some condition on data.

### example

- if () them () else ()

## $Project

- In mongo db, it's a syntax which can project the result and it'll decide that which data needs to display or not.
