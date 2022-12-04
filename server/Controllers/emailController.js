const Emails = require("../Models/emailModel")

const sendEmailToInstructor = async (req, res) => {
    const { body, id } = req.body

    try {
        const email = await Emails.create({Body: body, belongsTo: id})
        res.status(200).json(email)
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

module.exports = {
    sendEmailToInstructor
}