# Space Tycoon

Protótipo mobile offline de um tycoon de mineração marciana com arte cartoon autoral em Canvas 2D.

## Novidades da versão atual

Ao abrir o jogo, o jogador encontra um painel inicial com **Jogar**, **Tutorial** e **Configurações**. O tutorial explica o fluxo da mina antes do primeiro turno. As configurações permitem ligar ou desligar música e efeitos sonoros.

O jogador agora é uma personagem dentro da cena. A posição é desenhada no Canvas e pode ser alterada pelos quatro controles da mina, pelas setas do teclado quando executado no navegador ou tocando diretamente no local desejado da cena. A estação amarela de equipe fica no canto inferior esquerdo do corte. O botão de contratação só é liberado quando a personagem chega até esse setor; contratar deixou de ser uma ação abstrata de painel.

A música é uma trilha procedural original em loop, criada com Web Audio para não depender de uma faixa externa. Ela usa uma sequência leve de marimba sintetizada, baixo e pulsos triangulares, com volume discreto para um jogo idle. O efeito de clique é um asset de áudio original (`www/ui-click.mp3`) reproduzido nos botões e movimentos.

Os nomes padrão continuam inteiramente fictícios: **Red Mountains**, **Rask & Coil**, **Dusthaven**, **Nox Calder**, **Mara Quill**, **Pip Dorne**, **Odo Venn** e **Sia Morrow**.

## Build do APK

```bash
export ANDROID_SDK_ROOT=/home/ubuntu/android-sdk
./gradlew assembleDebug --no-daemon
```

O APK fica em `app/build/outputs/apk/debug/app-debug.apk`.
