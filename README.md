# Space Tycoon

Protótipo jogável mobile offline de um tycoon de colonização de Marte.

## Loop implementado

- criação local do jogador, empresa e colônia;
- mineração de ferro em tempo real;
- trabalhadores e contratação progressiva;
- ciclo de produção offline com limite de 8 horas;
- fundição e gargalo de processamento;
- venda de ferro processado para a Terra;
- upgrades de mina e fundição;
- mercado com preço simulado;
- notícias e primeiro marco de lore;
- salvamento automático em `localStorage`;
- contêiner Android nativo com WebView, sem necessidade de internet para jogar.

## Arquivos principais

- `www/index.html`: jogo mobile completo em HTML, CSS e JavaScript;
- `app/src/main/assets/index.html`: cópia embarcada no APK;
- `app/src/main/java/com/space/tycoon/MainActivity.java`: contêiner Android;
- `app/build.gradle`: configuração do aplicativo.

## Build do APK

```bash
export ANDROID_SDK_ROOT=/home/ubuntu/android-sdk
./gradlew assembleDebug --no-daemon
```

O APK de debug fica em `app/build/outputs/apk/debug/app-debug.apk`.

> Este é um primeiro protótipo funcional. O ranking online, robôs, automação, concorrentes e expansão pelo Sistema Solar ficam preparados para as próximas iterações.
