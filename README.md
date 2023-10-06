# phone-book-app

**Автор:** Комаров Николай

**Email:** k_k_007@mail.ru

**Номер телефона:** +77054144973


После входа в приложение появится страница авторизации, для входа нужно ввести логин и пароль. 

**login:** admin@gmail.com

**password:** admin


1. Описание всех необходимых настроек для проекта. 
   a. Версия Node:  v18.18.0
   b. Версия npm: 10.1.0
   c. Версия Ionic:
      - Ionic CLI: 7.1.1
      - Ionic Framework: @ionic/angular 7.4.2
      - @angular/cli: 16.2.4
   d. Версия Capacitor:
      - Capacitor CLI : 5.4.1
      - @capacitor/android : 5.4.1
      - @capacitor/core : 5.4.1
   e. Версия Gradle JDK: 17.0.2  
   f. Версия Java: "17.0.2" 2022-01-18 LTS
   g. Версия Android Studio: Android Studio Giraffe | 2022.3.1 Patch 2

2. Описание необходимых настроек IDEA для проекта
   - Установлены такие конфигурации IDEA: 
     - Версия Android Gradle Plugin Version: 8.0.0
     - Gradle Version: 8.0.2
     - Android SDK: 13.0 (Tiramisu)

3. Перед запуском проекта, нужно установить ПО: 
   a. Android Studio
   b. IDE (в моем случае был установлен WebStorm)

4. Описание действий и команд, которые нужно сделать для запуска проекта:
   4.1. Открываем свою IDE (в моем случае это WebStorm).
   4.2. Открываем терминал в IDE.
   4.3. В терминале IDE прописываем путь, где хотим установить проект, например: C:\Users\user\Desktop\angular
   4.3. Затем, скачиваем проект при помощи ввода в терминал IDE команды `git clone https://github.com/Sancekez/phone-book-app.git`
   4.4. Затем, для инициализации проекта и скачивания всех зависимостей прописываем в терминале IDE команду `npm i`
   4.5. Чтобы запустить проект в браузере, прописываем в терминале IDE команду `ionic serve`. 
   4.6. Чтобы запустить проект в Android Studio, прописываем в терминале IDE команду `ionic cap sync android`. После выполнения этой команды прописываем `npx cap open android`. Далее, откроется Android Studio, выбираем device manager (находится в верхнем правом углу) и выбираем устройство, на котором хотим протестировать приложение, затем для запуска приложения нажимаем кнопку "Run ‘app’" или сочетание клавиш `shift + f10`.

5. У меня возникли сложности с Virtual device при запуске (Run) приложения (на Virtual device приложение запускалось просто с белым экраном) и из-за этого я проводил тестирование приложения через Physical device в Device manager, через него все работает и запускается хорошо.

6. Для того чтобы сделать build APK нашего приложения, в верхнем меню Android Studio выбираем Build > Build Bundle(s) / APK(s) > Build APK(s).

7. После этого, останется только передать этот APK файл на Android устройство и установить его. После установки мы можем открыть и пользоваться нашим приложением.

После входа в приложение появится страница авторизации, для входа нужно ввести логин и пароль. 

**login:** admin@gmail.com
**password:** admin
