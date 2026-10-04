# Space Tycoon

Protótipo de idle tycoon mobile com mapa empresarial isométrico 2D, câmera arrastável, zoom por pinça e objetos permanentes no mundo.

## Experiência

A tela principal é o império do jogador. Negócios, terrenos, funcionários, veículos e sinais de produção ficam visíveis no mapa. O mapa pode ser deslocado com arraste ou toque; a câmera não gira. O zoom funciona com gesto de pinça e roda do mouse no navegador.

Cada prédio abre um painel sobreposto sem remover o mapa. O painel mostra nome, tipo, nível, produção por segundo, receita, funcionários e custo da próxima melhoria. Terrenos bloqueados mostram requisitos. A barra inferior possui Negócios, Melhorias, Funcionários, Mapa, Ranking e Menu.

A produção acontece automaticamente. Números de receita flutuam sobre os prédios, funcionários ficam circulando visualmente e cada negócio muda de escala e capacidade quando sobe de nível. A reputação cresce com melhorias e libera novas áreas.

Ao retornar depois de fechar o jogo, a produção offline é calculada e uma janela informa tempo ausente e dinheiro gerado antes de devolver o jogador ao mapa.

## Qualidade visual

A arte é 2D isométrica desenhada em Canvas, com cubos, telhados, estradas, terrenos, sombras, gradientes, partículas simples, objetos em camadas e HUD mobile. O visual prioriza leitura rápida, contraste e poucos elementos simultâneos, mas mantém o mapa vivo e observável.

## Build

```bash
export ANDROID_SDK_ROOT=/home/ubuntu/android-sdk
./gradlew assembleDebug --no-daemon
```

O APK fica em `app/build/outputs/apk/debug/app-debug.apk`. O pacote offline visual continua embarcado em `app/src/main/assets/mars_visual_cache.bin`.
