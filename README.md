# Node-Note-Application

## About Application
This is an implementation of a notes application where a user can add, remove, list and display a note. Command line arguments handled using Yargs library.

  
### Tech

The application uses these technologies:
* [Node.js] - a JavaScript runtime built on Chrome's V8 JavaScript engine


### Installation

The application requires [Node.js](https://nodejs.org/en/) v7+ to run.


Adding a note ...

```sh
$ node app.js add --title="Some Text" --body="Some Text for Body"
```

![alt text](https://github.com/akashgrana25/Notes-Node-Application/blob/master/ScreenShots/add-note.JPG)

List notes...
```sh
$ node app.js list
```

![alt text](https://github.com/akashgrana25/Notes-Node-Application/blob/master/ScreenShots/list-note.JPG)


Remove note...
```sh
$ node app.js remove --title="Some Text"
```

![alt text](https://github.com/akashgrana25/Notes-Node-Application/blob/master/ScreenShots/remove-note.JPG)


   [Node.js]: <https://nodejs.org/en/>
