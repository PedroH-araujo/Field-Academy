#!/bin/bash

VERSION="$(node -v)"

if [ -e /home/fieldacademy/"FIELD ACADEMY"/ ];

then
 echo "Pasta ja existe"
else
 mkdir /home/fieldacademy/"FIELD ACADEMY"
 echo "Diretório não existe vou criar"
fi
if [ -e /home/fieldacademy/"FIELD ACADEMY"/helloWorld.js ];
then
 echo "Arquivo ja esta criado"
else
 echo "Arquivo não existe vou criar"
 echo "Digite a mensagem que quer mostrar"
 read x
 echo "console.log('$x')" > /home/fieldacademy/"FIELD ACADEMY"/helloWorld.js
fi

echo "Sua versão do node é" $VERSION
node /home/fieldacademy/"FIELD ACADEMY"/helloWorld.js

echo "Vou mover sua pasta field academy"
mv /home/fieldacademy/"FIELD ACADEMY"/helloWorld.js /home/fieldacademy

echo "Vou zipar sua pasta"
zip -r field.zip "FIELD ACADEMY"

