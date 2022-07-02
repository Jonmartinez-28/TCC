import nodemailer from 'nodemailer'

const sendVerificationRequest = async ({
    identifier: email,
    url,
    provider: { server, from },
  }) => {
    const { host } = new URL(url)
    const transport = nodemailer.createTransport(server)
    transport.sendMail({
        to: email,
        from,
        subject: `Entrar como ${host}`,
        text: text({ url, host }),
        html: html({ url, host, email }),
    })
  }

const html = ({ url, host, email }) => {
    const escapedEmail = `${email.replace(/\./g, "&#8203;.")}`
    const escapedHost = `${host.replace(/\./g, "&#8203;.")}`

  return (
    <>

        <table>
            <tr>
                <td>
                    <strong> ${escapedHost} </strong>
                </td>
            </tr>
        </table>

        <table>
            <tr>
                <td>
                    Entrar como <strong> ${escapedEmail} </strong>
                </td>
            </tr>
            <tr>
                <td>
                    <table>
                        <tr>
                            <td> <a href="${url}" target="_blank"> Entrar </a> </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    Se você não requisitou este email, você pode ignorá-lo
                </td>
            </tr>
        </table>
    </>
  )
    function text({ url, host}){
        return `Entrar ${host}\n${url}\n\n`
    }
}

export default sendVerificationRequest