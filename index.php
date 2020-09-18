<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Заметки</title>
    <link rel="stylesheet" href="/style.css">
    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    
</head>
<body>
    <header><h1>Ваши заметки</h1></header>

    <div id="wrapper">
        <div class="hh">
            <div class="allGrInBlock">
            <h2 class="current"></h2>
            </div>
            <button class="addNote">+</button>
            <button class="addGroup">Создать группу</button>
            <div class="groupCreationField">
            <h3>
                <form class="adderGroupForm">
                    <input type="text" class="nameGroup" placeholder="Название Группы" required>
                    <input type="submit" class="btnSub" value="Добавить">
                </form>
            </h3>
        </div>
        <div class="extraNoteField">
            <h3>
                <form class="adderForm">
                    <input type="text" class="nameNote" placeholder="Название Заметки" required>
                    <input type="submit" class="btnSub" value="Добавить">
                </form>
            </h3>
        </div>
        </div>
        


        <div class="main">
            <div class="allNotes"></div>
        </div>
    </div>
    
    <div class="footer">
            <h5>Powered by Aleksandr Nesterov</h5>
    </div>
    <script src="/GroupClass.js"></script>
    <script>
        let currenGroup = new Group('<?=$_GET['g']?>')
    </script>
    <script src="/newScript.js"></script>
</body>
</html>