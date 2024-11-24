/**
 * @swagger
 * tags:
 *   name: Schedules
 *   description: Operações relacionadas a agendamentos
 */

/**
 * @swagger
 * /schedules:
 *   get:
 *     summary: Retorna uma lista de agendamentos
 *     tags: [Schedules]
 *     responses:
 *       200:
 *         description: Lista de agendamentos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "b18428fb-f45c-49f3-ab4f-1d1ed0dec86d"
 *                   title:
 *                     type: string
 *                     example: "Basquete de domingo"
 *                   description:
 *                     type: string
 *                     example: "Partida amistosa"
 *                   date:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-11-26T15:00:00.000Z"
 *                   startHour:
 *                     type: string
 *                     example: "15:00"
 *                   endHour:
 *                     type: string
 *                     example: "16:00"
 *                   userId:
 *                     type: string
 *                     example: "8892379a-707a-4655-8333-80ed4655113c"
 *                   sport:
 *                     type: string
 *                     example: "Basketball"
 *                   status:
 *                     type: string
 *                     example: "accepted"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-11-20T16:16:22.422Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-11-20T16:16:22.422Z"
 *                   user:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "8892379a-707a-4655-8333-80ed4655113c"
 *                       email:
 *                         type: string
 *                         example: "admin@gmail.com"
 *                       name:
 *                         type: string
 *                         example: "Admin"
 *       404:
 *         description: Nenhum agendamento encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "No schedules found"
 *       403:
 *         description: Usuário não autorizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Users are only allowed to view 'accepted' schedules"
 * /schedule/unique/{id}:
 *   get:
 *     summary: Retorna os detalhes de um agendamento específico pelo ID
 *     tags: [Schedules]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do agendamento
 *         schema:
 *           type: string
 *           example: "9569e704-e712-4e3c-82d3-8831ec1f0da5"
 *     responses:
 *       200:
 *         description: Agendamento encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "9569e704-e712-4e3c-82d3-8831ec1f0da5"
 *                 title:
 *                   type: string
 *                   example: "Treino de futebol"
 *                 description:
 *                   type: string
 *                   example: "Sessão de treinamento"
 *                 date:
 *                   type: string
 *                   example: "2024-12-02T18:00:00.000Z"
 *                 startHour:
 *                   type: string
 *                   example: "14:00"
 *                 endHour:
 *                   type: string
 *                   example: "15:00"
 *                 userId:
 *                   type: string
 *                   example: "1ccd3f95-5d2c-49ba-93f5-079350d2cadb"
 *                 sport:
 *                   type: string
 *                   example: "basquete"
 *                 status:
 *                   type: string
 *                   example: "pending"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-11-24T15:40:20.673Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-11-24T15:40:20.673Z"
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
 *                       example: "user"
 *       404:
 *         description: Agendamento não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Schedule not found"
 * /schedule:
 *   post:
 *     summary: Cria um novo agendamento
 *     tags: [Schedules]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título do agendamento
 *               description:
 *                 type: string
 *                 description: Descrição detalhada do agendamento
 *               date:
 *                 type: string
 *                 format: date-time
 *                 description: Data e hora do evento (formato ISO 8601)
 *               startHour:
 *                 type: string
 *                 description: Hora do evento
 *               endHour:
 *                 type: string
 *                 description: Hora do evento
 *               sport:
 *                 type: string
 *                 description: Esporte relacionado ao evento
 *             required:
 *               - title
 *               - description
 *               - date
 *               - startHour
 *               - endHour
 *               - sport
 *     responses:
 *       201:
 *         description: Agendamento criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "9569e704-e712-4e3c-82d3-8831ec1f0da5"
 *                 title:
 *                   type: string
 *                   example: "Treino de futebol"
 *                 description:
 *                   type: string
 *                   example: "Sessão de treinamento"
 *                 date:
 *                   type: string
 *                   example: "2024-12-02T18:00:00.000Z"
 *                 startHour:
 *                   type: string
 *                   example: "14:00"
 *                 endHour:
 *                   type: string
 *                   example: "15:00"
 *                 userId:
 *                   type: string
 *                   example: "1ccd3f95-5d2c-49ba-93f5-079350d2cadb"
 *                 sport:
 *                   type: string
 *                   example: "basquete"
 *                 status:
 *                   type: string
 *                   example: "pending"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-11-24T15:40:20.673Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-11-24T15:40:20.673Z"
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
 *                       example: "user"
 *       400:
 *         description: Dados inválidos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Invalid data provided"
 * /schedule/update/{id}:
 *   put:
 *     summary: Atualiza os detalhes de um agendamento específico pelo ID
 *     tags: [Schedules]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do agendamento a ser atualizado
 *         schema:
 *           type: string
 *           example: "9569e704-e712-4e3c-82d3-8831ec1f0da5"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título do agendamento
 *               description:
 *                 type: string
 *                 description: Descrição detalhada do agendamento
 *               date:
 *                 type: string
 *                 format: date-time
 *                 description: Data e hora do evento (formato ISO 8601)
 *               startHour:
 *                 type: string
 *                 description: Hora do evento
 *               endHour:
 *                 type: string
 *                 description: Hora do evento
 *               sport:
 *                 type: string
 *                 description: Esporte relacionado ao evento
 *             required:
 *               - title
 *               - description
 *               - date
 *               - startHour
 *               - endHour
 *               - sport
 *     responses:
 *       200:
 *         description: Agendamento atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "9569e704-e712-4e3c-82d3-8831ec1f0da5"
 *                 title:
 *                   type: string
 *                   example: "Treino de futebol"
 *                 description:
 *                   type: string
 *                   example: "Sessão de treinamento"
 *                 date:
 *                   type: string
 *                   example: "2024-12-02T18:00:00.000Z"
 *                 startHour:
 *                   type: string
 *                   example: "14:00"
 *                 endHour:
 *                   type: string
 *                   example: "15:00"
 *                 userId:
 *                   type: string
 *                   example: "1ccd3f95-5d2c-49ba-93f5-079350d2cadb"
 *                 sport:
 *                   type: string
 *                   example: "basquete"
 *                 status:
 *                   type: string
 *                   example: "pending"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-11-24T15:40:20.673Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-11-24T15:40:20.673Z"
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
 *                       example: "user"
 *       400:
 *         description: Dados inválidos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Invalid data provided"
 *       404:
 *         description: Agendamento não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Schedule not found"
 * /schedule/{id}:
 *   delete:
 *     summary: Deleta um agendamento específico pelo ID
 *     tags: [Schedules]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do agendamento a ser deletado
 *         schema:
 *           type: string
 *           example: "9569e704-e712-4e3c-82d3-8831ec1f0da5"
 *     responses:
 *       200:
 *         description: Agendamento deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "Schedule deleted successfully"
 *       404:
 *         description: Agendamento não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Schedule not found"
 */
