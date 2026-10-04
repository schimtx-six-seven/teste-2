# Space Tycoon

Protótipo mobile offline de um tycoon de mineração marciana com uma direção visual cartoon autoral. A interface foi redesenhada para parecer um jogo de estúdio: a mina é uma cena viva, os personagens têm retratos próprios, os botões têm peso físico e as decisões aparecem em balões de fala e pequenas histórias de turno.

## Direção de arte

A versão atual não usa emojis, ícones prontos nem imagens externas na interface. A mina, o elevador, os poços, os personagens, os ícones de navegação e a tela de abertura são desenhados diretamente em Canvas 2D. O estilo usa contornos escuros, cores de papel, coral, azul-petróleo e amarelo, com proporções exageradas e pequenas imperfeições deliberadas para afastar a aparência de dashboard gerado automaticamente.

Os nomes padrão foram substituídos por nomes inteiramente fictícios: **Red Mountains**, **Rask & Coil**, **Dusthaven**, **Nox Calder**, **Mara Quill**, **Pip Dorne**, **Odo Venn** e **Sia Morrow**. Também troquei referências de data por uma contagem diegética de turnos e sóis.

## Experiência atual

A tela Mina mostra a operação em corte, trabalhadores no poço, fila de minério e o elevador. Gerência apresenta quatro personagens com especializações diferentes. Mercado controla o despacho de carga. Placar conserva as quatro categorias de ranking. Mural registra eventos narrativos curtos. O jogo continua offline e salva o progresso localmente.

## Build do APK

```bash
export ANDROID_SDK_ROOT=/home/ubuntu/android-sdk
./gradlew assembleDebug --no-daemon
```

O APK fica em `app/build/outputs/apk/debug/app-debug.apk`.
