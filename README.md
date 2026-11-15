# AgendaFácil

Site para marcar consultas em clínicas e consultórios pequenos: o paciente escolhe o serviço e o profissional, vê os horários livres e agenda.

Autores: Aldo Baltar e Pedro Pereira

## Sobre o projeto

Muitas clínicas pequenas ainda marcam consultas por WhatsApp, por telefone ou em um caderno. Isso gera horários duplicados, esquecimentos e falta de histórico dos atendimentos.

O AgendaFácil junta tudo em um lugar só e mostra apenas os horários livres, para que o paciente marque a consulta sem confusão e a clínica tenha a agenda do dia organizada.

Para o paciente:

- Marcação rápida, a qualquer hora
- Horários livres à vista
- Escolha do profissional de confiança

Para a clínica:

- Agenda do dia organizada em uma só tela
- Menos ligações para marcar horários
- Menos faltas e horários vazios

## Páginas

- index.html: página inicial
- servicos.html: serviços
- profissionais.html: profissionais
- agendar.html: agendamento
- agenda.html: agenda do dia
- cadastro.html: cadastro do cliente
- confirmacao.html: resumo da consulta agendada
- login.html: entrar na conta (acesso por e-mail)

A agenda do dia pode ser impressa com Ctrl+P.

## Estrutura de pastas

```
agendafacil/
  index.html
  servicos.html
  profissionais.html
  agendar.html
  agenda.html
  cadastro.html
  confirmacao.html
  login.html
  css/
    estilo.css
  js/
    agendar.js
    data.js
  img/
    fotos, banners, logo e ícones das redes sociais
  README.md
```

- css/estilo.css: estilo de todas as páginas
- js/agendar.js: script da página de agendamento, que ajusta os horários conforme o dia escolhido
- js/data.js: script que mostra a data de hoje na agenda do dia e na confirmação
- img/: imagens usadas no site

## Como abrir o site

Não precisa instalar nada. Baixe ou clone o repositório e abra o arquivo index.html no navegador (dois cliques no arquivo). A navegação entre as páginas é feita pelo menu no topo.
