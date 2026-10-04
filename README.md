# Space Tycoon

Protótipo mobile offline de um tycoon de mineração marciana, agora organizado em torno de uma mina vertical: poços, trabalhadores, elevador, cadeia de produção e decisões de gerente. A direção visual usa ilustração original de Marte, tons de ferrugem e papel, hierarquia editorial e uma mina animada em corte — uma referência de gênero, não uma cópia de interface ou assets de outro jogo.

## O que mudou

A tela principal deixou de ser um dashboard genérico e passou a ser a operação visual da mina. O jogador acompanha o elevador, vê os cinco níveis do corte, contrata a equipe do poço e decide entre melhorar perfuração ou expandir o elevador. As telas seguintes separam gerência, mercado, ranking e notícias. O loop continua offline, com produção durante a ausência, mas agora a intervenção principal é alocar capital no gargalo certo.

O APK inclui quatro placares: global por dinheiro, Brasil por dinheiro, global por tempo de jogo e Brasil por tempo de jogo. Sem conexão, o jogo exibe o último placar conhecido/seed local. Para placar compartilhado entre jogadores, há uma API Node em `server/index.js` e uma migração Supabase em `supabase/migrations/0001_rankings.sql`; o projeto Supabase disponível nesta sessão está inativo, então a sincronização pública precisa ser ativada/deployada antes de virar um serviço permanente.

## Build

```bash
export ANDROID_SDK_ROOT=/home/ubuntu/android-sdk
./gradlew assembleDebug --no-daemon
```

O APK fica em `app/build/outputs/apk/debug/app-debug.apk`. A capa original está em `assets/space-tycoon-cover.png`, também embarcada em `www/cover.png` e no APK.
