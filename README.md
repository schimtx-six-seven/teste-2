# Space Tycoon

Protótipo de idle tycoon mobile com mapa empresarial isométrico 2D, câmera arrastável, zoom por pinça e objetos permanentes no mundo.

## Clima e animação

O mapa agora possui um ciclo climático automático com três estados: clima estável, poeira leve e chuva fina. Nuvens se deslocam no céu, partículas de poeira atravessam a cena, a chuva surge em linhas diagonais e o estado atual aparece em uma etiqueta discreta no mapa. O clima muda em ciclos curtos para ser perceptível durante uma sessão, sem deixar a leitura dos negócios confusa.

Os funcionários se deslocam levemente em seus setores, as luzes dos prédios pulsam, os pontos de atividade variam e os números de receita continuam subindo sobre as construções. Tudo é desenhado em Canvas, sem download adicional e sem depender de assets externos para renderizar o clima.

## Experiência

A tela principal é o império do jogador. Negócios, terrenos, funcionários, veículos e sinais de produção ficam visíveis no mapa. O mapa pode ser deslocado com arraste ou toque; a câmera não gira. O zoom funciona com gesto de pinça e roda do mouse no navegador.

Cada prédio abre um painel sobreposto sem remover o mapa. O painel mostra nome, tipo, nível, produção por segundo, receita, funcionários e custo da próxima melhoria. Terrenos bloqueados mostram requisitos. A barra inferior possui Negócios, Melhorias, Funcionários, Mapa, Ranking e Menu.

## Build

```bash
export ANDROID_SDK_ROOT=/home/ubuntu/android-sdk
./gradlew assembleDebug --no-daemon
```

O APK fica em `app/build/outputs/apk/debug/app-debug.apk`.
