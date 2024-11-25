/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operações relacionadas aos usuários
 */

/**
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza o login de um usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: O email do usuário
 *               password:
 *                 type: string
 *                 description: A senha do usuário
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "1ccd3f95-5d2c-49ba-93f5-079350d2cadb"
 *                     email:
 *                       type: string
 *                       example: "user@example.com"
 *                     name:
 *                       type: string
 *                       example: "User"
 *                     role:
 *                       type: string
 *                       example: "user"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-11-20T16:16:22.262Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-11-20T16:16:22.262Z"
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFjY2QzZjk1LTVkMmMtNDliYS05M2Y1LTA3OTM1MGQyY2FkYiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzMyNDY3MzA4LCJleHAiOjE3MzI1NTM3MDh9.fd9ymBSQsL5YNwu8eqgoIesEL32LRbt49V2Uy2ZvoGU"
 *       400:
 *         description: Senha Inválida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 'error'
 *                 message:
 *                   type: string
 *                   example: 'Incorrect password'
 *       404:
 *         description: Usuário não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 'error'
 *                 message:
 *                   type: string
 *                   example: 'User not found'
 * /register:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome completo do usuário
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email do usuário
 *               password:
 *                 type: string
 *                 description: Senha do usuário
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "024dba9d-f60b-4c1f-a187-990aa07d5c45"
 *                 email:
 *                   type: string
 *                   example: "user@example.com"
 *                 name:
 *                   type: string
 *                   example: "user"
 *                 password:
 *                   type: string
 *                   example: "$2b$10$EEfW1t0dqgGKbVjlUmS6MO9iPB56jS9E/sNB5gZ1ESJveeLVUgy7a"
 *                 role:
 *                   type: string
 *                   example: "user"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-11-24T16:50:32.884Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-11-24T16:50:32.884Z"
 *       400:
 *         description: Senha Inválida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 'error'
 *                 message:
 *                   type: string
 *                   example: 'password must have at least 6 characters'
 */
/**
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retorna todos os usuários
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []  # Aplica o JWT somente nesta rota
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     format: uuid
 *                   email:
 *                     type: string
 *                   name:
 *                     type: string
 *                   role:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *       403:
 *         description: Usuário não autorizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 'error'
 *                 message:
 *                   type: string
 *                   example: 'Access denied: admins only'
 *
 * /api/users/{id}:
 *   get:
 *     summary: Retorna um usuário específico
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário
 *         schema:
 *           type: string
 *           format: uuid
 *     security:
 *      - bearerAuth: []  # Aplica o JWT somente nesta rota
 *     responses:
 *       200:
 *         description: Dados do usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   id:
 *                     type: string
 *                     format: uuid
 *                   email:
 *                     type: string
 *                   name:
 *                     type: string
 *                   role:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *       404:
 *         description: Usuário não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 'error'
 *                 message:
 *                   type: string
 *                   example: 'User not found'
 *       403:
 *         description: Usuário não autorizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 'error'
 *                 message:
 *                   type: string
 *                   example: 'Access denied: admins only'
 * /user/update/{id}:
 *   put:
 *     summary: Atualiza os dados de um usuário existente
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário que será atualizado
 *         schema:
 *           type: string
 *           example: "80874b68-8b05-43b3-9f84-10d8804fa203"
 *     security:
 *       - bearerAuth: []  # Aplica o JWT somente nesta rota
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome completo do usuário
 *               email:
 *                 type: string
 *                 format: email
 *                 description: O novo email do usuário
 *               password:
 *                 type: string
 *                 description: A nova senha do usuário
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "80874b68-8b05-43b3-9f84-10d8804fa203"
 *                     email:
 *                       type: string
 *                       example: "user@example.com"
 *                     name:
 *                       type: string
 *                       example: "user changed"
 *                     password:
 *                       type: string
 *                       example: "123123123"
 *                     role:
 *                       type: string
 *                       example: "user"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-11-24T17:07:17.116Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-11-24T17:07:23.967Z"
 *       400:
 *         description: Senha Inválida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 'error'
 *                 message:
 *                   type: string
 *                   example: 'Invalid input data'
 *       404:
 *         description: Usuário não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 'error'
 *                 message:
 *                   type: string
 *                   example: 'User not found'
 * /user/{id}:
 *   delete:
 *     summary: Deleta um usuário existente
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []  # Aplica o JWT somente nesta rota
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário que será deletado
 *         schema:
 *           type: string
 *           example: "80874b68-8b05-43b3-9f84-10d8804fa203"
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 'success'
 *                 message:
 *                   type: string
 *                   example: 'User deleted successfully'
 *       404:
 *         description: Usuário não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 'error'
 *                 message:
 *                   type: string
 *                   example: 'User not found'
 *       403:
 *         description: Acesso negado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 'error'
 *                 message:
 *                   type: string
 *                   example: 'Access denied: admins only'
 */
