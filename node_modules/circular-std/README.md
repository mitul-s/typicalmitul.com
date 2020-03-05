<p align="center">
  <img src="https://rawcdn.githack.com/ixahmedxi/circular-std/1d216ea48662bcac94953d20bc9d1795df2bafcd/images/text.jpg" alt="Text" />
</p>

> Circular Std has always been that font that I am mostly interested in, something about it makes it look so nice to me and many more people so when I saw that it wasn't on google fonts I needed to make the process of integrating into projects as nice as how that font looks.

:sparkles: Originally forked from [elartix/circular-std](https://github.com/elartix/circular-std)

## Examples

<p align="center">
  <img src="https://rawcdn.githack.com/ixahmedxi/circular-std/f462f1fa699de3f79acc10a17c6e120b391ae1f8/images/1.jpg" alt="Text" />
</p>
<p align="center">
  <img src="https://rawcdn.githack.com/ixahmedxi/circular-std/f462f1fa699de3f79acc10a17c6e120b391ae1f8/images/2.jpg" alt="Text" />
</p>
<p align="center">
  <img src="https://rawcdn.githack.com/ixahmedxi/circular-std/f462f1fa699de3f79acc10a17c6e120b391ae1f8/images/3.jpg" alt="Text" />
</p>

## Installation

This is the first step to get to use the font in your project, if you have ever installed npm modules this should be quite familiar to you. Don't forget to cd into your project folder first.

```bash
npm install --save circular-std
```

or you can use yarn if you would like to

```bash
yarn add circular-std
```

## Usage

Usage of this font is really as as you only need to import the module in your main file and the font should be accessible to all of the project's components or files.

```js
import "circular-std";
```

This imports the css file into your javascript so make sure that your project handles css imports in javascript, if you are using React or Vue's starter boilerplates this should work with no additional setup. If you are using webpack make sure to have some type of a css loader in your webpack configuration. You could also import the library in your css file directly but that would require an absolute path to the index.css file inside the node module downloaded which in my opinion would not be the best option.

And just start using it normally in your css files or your css in js libraries!

```css
p {
  font-family: CircularStd;
  font-weight: 400;
}
```

## License

The Circular Std font family is distributed under the [Open Font License](http://scripts.sil.org/cms/scripts/page.php?item_id=OFL_web)

The MIT License (MIT)

Copyright (c) 2019 Ahmed Tarek

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
