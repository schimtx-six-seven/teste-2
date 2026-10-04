# Space Tycoon

Protótipo mobile offline de um tycoon de mineração marciana com arte cartoon autoral em Canvas 2D e corte isométrico pseudo-3D.

## Versão pseudo-3D

A cena principal agora é renderizada em alta resolução no Canvas e reduzida para a tela do celular. O desenho usa projeção isométrica falsa com planos de túnel, cubos com três faces, elevador com volume, plataformas em profundidade, trabalhadores em perspectiva, sombras elípticas e personagem com cabeça, corpo, capacete e rótulo próprios. Não é um modelo 3D real, mas cria a sensação de profundidade mantendo o jogo offline, leve para processar e controlável por toque.

A personagem pode ser movida pelos quatro controles, pelas setas do teclado ou tocando no túnel. A estação de equipe fica em uma plataforma amarela e a contratação só é possível quando a personagem chega fisicamente até ela.

## Conteúdo offline

O APK inclui `mars_visual_cache.bin`, um pacote local determinístico de dados de expansão visual com 110 MiB. Ele mantém o aplicativo dentro da faixa solicitada de 100 MB a 600 MB e reserva espaço para a expansão de texturas e variações visuais sem downloads obrigatórios. A versão atual não precisa acessar internet para renderizar a mina.

## Áudio

A trilha continua sendo procedural e original em Web Audio, em loop, com volume discreto. O efeito de confirmação `www/ui-click.mp3` está embarcado nos assets do Android.

## Build do APK

```bash
export ANDROID_SDK_ROOT=/home/ubuntu/android-sdk
./gradlew assembleDebug --no-daemon
```

O APK fica em `app/build/outputs/apk/debug/app-debug.apk`.
