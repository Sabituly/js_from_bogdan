const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    //res.end('Hello, World!\n');

    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Learn_js</title>
  <script src="index.js"></script>
</head>
<body>

<style>

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    
    html,  {
        height: 100%;
    }
    
    body {
  margin: 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  /* Чтобы занимал оставшееся пространство */
  flex-grow: 1;
  background: whitesmoke;
}

footer {
  /* Чтобы footer не уменьшался */
  flex-shrink: 0;
  
}






    .header {

        background-color: aqua;
        min-height: 60px;
        width: 100%;
    }

    .nav {


    }
    li  {
        list-style-type: none;
    }
    .nav_ul {

        display: flex;
        justify-content: end;
        align-items: center;
        margin-right: 30px;
        height: 60px;
        gap: 10px;
        padding: 10px;
        font-size: 16px;
    }

    h1 {

        margin: 10px;
        color: blue;
    }

    article {

        margin: 10px;
        color: orange;
    }
    
    p {
    color: orange;
    }
    .form_main {

        margin: 15px;
    }
    .form {

        width: 100%;
        display: flex;
        gap: 10px;

    }

    footer  {

        background-color: blueviolet;

        height: 60px;
        margin-top: -60px;
        border: 2px solid green;
        position: relative;

    }

    .footer_li  {

        display: flex;
        gap: 15px;
        height: 100%;
        align-items: center;
        justify-content: center;
    }

</style>
     <header class="header">
         <nav class="nav">
             <div>
                 <ul class="nav_ul">
                     <li>About us</li>
                     <li>Contacts</li>
                     <li>Adresess</li>
                 </ul>
             </div>
         </nav>
     </header>

<h1>Это самый главный заголовок H1</h1>
<main>
    <section>
        <article>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolore ex magni quaerat quod? Accusantium ad, adipisci aspernatur beatae dolorem ex illo modi nam officiis, perspiciatis porro quod sed vitae.</article>

        <hr>
        <article>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum est nemo. At beatae consequuntur, delectus dolore dolores ducimus ea eos, impedit, laborum nihil nulla perspiciatis? Accusamus debitis dignissimos dolores earum fuga ipsa iste iusto, modi pariatur, perspiciatis provident temporibus tenetur vero. Consequuntur debitis esse iusto molestiae perferendis velit, voluptatem? Animi blanditiis explicabo minima modi. Animi aperiam asperiores aspernatur culpa, cumque eveniet ex harum, illum iste nemo nisi non nulla odit reiciendis voluptatum! Ad, blanditiis consectetur cum delectus doloremque eaque est ex id in ipsa laborum maxime molestias nisi non numquam possimus quos sed temporibus. Consectetur delectus est nam sequi?</article>
    </section>

    <section>

        <div class="form_main">
            <p>Заполните поля</p> <br>
            <form action="#" class="form">
                <p>Имя</p>
                <input type="text" placeholder="Введите сюда ваше имя">
                <p>Почта</p>
                <input type="email">

                <input type="submit">
            </form>
        </div>


    </section>
</main>
<footer>
    <ul class="footer_li">
        <li>Ссылка</li>
        <li>Ссылка</li>
        <li>Ссылка</li>
    </ul>
</footer>

</body>
</html>`)
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});