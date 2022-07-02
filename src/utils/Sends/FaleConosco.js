import nodemailer from 'nodemailer'

const FaleConoscoEnvio = async ({
    provider: { EMAIL_SERVER, EMAIL_FROM },
  }) => {
    const transport = nodemailer.createTransport(EMAIL_SERVER)
    transport.sendMail({
        to: EMAIL_SERVER,
        from ,
        html,
    })
  }

const html = () => {

  return (
    <>
        <h1> Banana </h1>

    </>
  )

}

export default FaleConoscoEnvio