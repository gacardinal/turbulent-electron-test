# Electron exercise

Application has been scaffolded with [Electron forge](https://www.electronforge.io/), read the documentation for more details about usage and configuration.

## Exercise - AKA the notebook app

Application should let me take notes and save them on my computer.

### Features

- As a user I want to be able to write a note
  - When I open the application, I should be able to write the content of my note in a field.
  - If my field is empty, I should be warned that I can't submit an empty field
- As a user I want to save the content of my note on my computer
  - When I click on save, a dialog window should ask me where to save the file
  
And that's it :)

### Details

Feel free to add styling to the application, with custom CSS or using a UI Framework.
You can use any tools you want, as long as the features described above are working.

## Allo test
test
other test


# Implementation details

Hi! I had some fun playing with this project!
I hope you like it!

Since the electron main process is supposed (in my humble opinion, at least) to act as an API that the front end can consume, I like to stick to something that's akin to Larman's controller principle. I opt to structure my main process in much the same way I would if I was writing an HTTP API, meaning that the main process creates controller instances who's responsibilities are to manage access and operations on the domain entities.

The controllers themselves depend on abstractions of a repository that acts as the persistence layer; in this case, there is a `AbstractNoteRepository` class that's "abstract" that specifies the interface to implement and a `FileSystemNoteRepository` class that is a concretion of that interface.

I admit all of this would have been cleaner if done in TypeScript but I did feel like that may have perhaps been out of scope for this assignement.

Cheers!
