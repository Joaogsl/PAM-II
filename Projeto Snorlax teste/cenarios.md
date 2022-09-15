#language: pt-br

Cenários de Funcionalidade Teste No Tcc

1 - Realizar o cadastro de usuário
- Como um novo usuário.
- Eu quero preencher os campos: nome completo, usuário, senha,
data de nascimento, foto de perfil, email, descrição e especialidades.
- Para realizar o cadastro no Web Hub.
- Dado: não deve haver uma conta criada com o email inserido.

2 - Realizar login no site
- Como um usuário já cadastrado.
- Eu quero preencher os campos: email e senha.
- Para realizar o login no Web Hub.
- Dado: o email e a senha devem ser as cadastradas na plataforma.

3 - Criar um projeto
- Como um usuário logado e com a habilidade de criar projetos.
- Eu quero preencher os campos: nome do projeto, matéria, prazo de entrega,
número de integrantes e requisições.
- Para a criação de um novo projeto no Web Hub.
- Dado: não deve haver outro projeto com o mesmo nome.

4 - Entrar em um projeto
- Como um usuário que deseja participar de um projeto.
- Eu quero inserir o pin fornecido para quem criou o projeto.
- Para poder fazer parte de alguma das equipes criadas.
- Dado: não posso inserir um pin inexistente ou expirado.

5 - Escolher um grupo referente a um projeto
- Como um usuário que deseja participar de um grupo de determinado projeto.
- Eu quero verificar quais especificações estão disponíveis e entrar no chat
de determinado grupo.
- Para trabalhar com a minha maior habilidade em dos grupos do projeto.
- Dado: não posso entrar em um grupo que tenha excedido o número limite de
participantes ou escolher a especificação que alguém já tenha decidido exercer.

6 - Enviar mensagens no chat do meu grupo.
- Como um usuário que decidiu qual grupo participar.
- Eu quero escrever e enviar mensagens para os participantes.
- Para me relacionar com os integrantes e decidir como o projeto irá funcionar.
- Dado: posso responder quantas mensagens quiser e não posso escrever mensagens
com nome de outras pessoas .