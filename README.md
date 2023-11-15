# my-sequel-adventure

## Description
My Sequel Adventure is a game application where users can first create a character. Then they can use their character to fight against to win battles and grow their strength points and add up their wins. Users can battle until they beat the highest level.

Some langueges used were MySQL, JavaScript, and CSS. 


This game was created to let a User have fun. Sometimes you just need a little entertainment. My Sequel Adventure was created by three Web Development students. The creators are Alonso, Fiqre, and Tayla. 

## Table of Contents
[Technology Used](#technology-used)<br>
[Usage](#usage)<br>
[New Tech](#new-tech)<br>
[CSS Framework](#css-framework)<br>
[Learning Points](#learning-points)<br>
[Credits](#credits)<br>
[Author](#author)<br>

## Technology Used
|Technology Name|Resource|
|-----------|------------|
|JavaScript|[link](https://www.w3schools.com/js/js_intro.asp)|
|CSS|[link](https://www.w3schools.com/css/css_intro.asp)|
|Git|[link](https://www.w3schools.com/git/git_intro.asp?remote=github)|
|Node.js|[link](https://nodejs.org/en/docs)|
|Coloris|[link](https://github.com/mdbassit/Coloris)|
|Express|[link](https://www.npmjs.com/package/express)|
|Express-session|[link]()|
|bcrypt|[link]()|
|Handlebars|[link]()|
|Mysql2|[link]()|
|Sequelize|[link]()|
|dotenv|[link]()|
|Heroku|[link]()|
|JAWS DB|[link]()|


## Usage

|User wants to | So we | Demo|
|--------------|-------|-----|
|Login and stay logged in| Created a login page and signup page|![login-demo](./readme/logindemo.gif)|
|Create a character/customize a character| Made two ways to create a character|![character-demo](./readme/character-demo.gif)|
|To fight Monsters and grow stronger when they win| Created a battle page, and had back end that took care of the battle logic|![fight-demo](./readme/fight-demo.gif)|

|User wants to | So we API call| Demo|
|--------------|---------------|-----|
|Create/Delete Characters| To Character Route|![create-demo](./readme/create-demo.gif)|
```js
//Create a character
router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const newCharacter = await Character.create(req.body);
    res.status(201).json(newCharacter);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete a character by ID
router.delete('/:id', async (req, res) => {
  const characterId = req.params.id;
  try {
    const deletedCount = await Character.destroy({
      where: { id: characterId },
    });
    if (deletedCount === 1) {
      res.status(200).json({ message: 'Character deleted successfully' });
    } else {
      res.status(404).json({ error: 'Character not found' });
    }
  } catch (error) {
    handleError(res, error);
  }
});
```
These api routes allow us to create and delete characters. The character route is versitile in that it can create both a default state character or a customized one

|User wants to | so we |
|--------------|-------|
|Be able to sign up and log in again later|Created a user model that holds a username and encrypted password|
|Have multiple characters| Created character model that referenced the User id key|
|Fight monsters|Created monster model|

Users could have many characters, characters can only belong to one user
Potions can belong to many characters, characters can belong to many potions they link through a joint model that tracks whether or not the character has used the potion.

/api/user has all the api calls for user related functions
/api/character has all the api calls for character related functions

## New Tech
[Coloris](https://github.com/mdbassit/Coloris) <br>
A lightweight and elegant JavaScript color picker written in vanilla ES6.
Convert any text input field into a color field. <br>
![coloris-demo](./readme/coloris-demo.gif)

## CSS Framwork
[BootStrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins. <br>
![css-demo](./readme/css-demo.gif)

## Learning Points
Getting a comprehensive understanding of databases, models, and associations.
Also getting a better understanding of how to deploy an app to heroku with a db attached.


## Credits
[freepik](https://www.freepik.com/) for monsters <br>
[dall-e](https://labs.openai.com/) for monsters

## Developers
|Coder| Github|
|-----|-------|
|Alonso Ampuero|[link](https://www.github.com/fenri.ragni)|
|Tayla Rios|[link](https://github.com/taylasagerios)|
|Fiqre Tezare|[link](https://github.com/Fiqre-Ab)|
