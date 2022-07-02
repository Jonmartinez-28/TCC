import Head from 'next/head';
import styles from '../styles/QuemSomos/QuemSomos.module.css'

const QuemSomos = () => {
    return(
        <>
           <Head>
                <meta charSet="UTF-8"></meta>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title> Quem Somos </title>          
            </Head> 

            <div className={styles.container}>
                <div className={styles.containerItens}>   
                    <h2> QUEM SOMOS</h2>
                        <p> 
                            Somos uma empresa voltada à moda sustentável, com o propósito de inovar e reinventar  o vestuário escolar, trazendo vida e autenticidade àqueles que utilizam nossas peças. O projeto surgiu com o intuito de abraçar aqueles que desejavam encontrar nas instituições escolares um espaço de representatividade (expressão), de forma mais econômica, acessível e sustentável, inspirando o nome da marca: Sus (sustentabilidade) Tyle (style, em português, estilo). 
                        </p>

                        <p> 
                            Como alunos, entendíamos a necessidade de produzir uma plataforma que oferecesse não somente produtos novos, mas também artigos outrora usados, encontrados em bom estado, que apresentavam certa dificuldade de compra, seja pelos valores ou pelos locais de venda, dentre eles uniformes e ferramentas técnicas para seus respectivos cursos. Além dessa questão, buscamos representar em nossa plataforma a importância de uma conscientização a respeito do uso cíclico de materiais, embasado em pesquisas quanto aos gastos realizados na produção de roupas. Deste modo surgiu o logo da nossa marca, um fantasminha, que como sabemos, no universo cinematográfico faz o uso de um lençol, representando a transformação de uma peça que se origina com um intuito, mas pode ter diversas utilidades. 
                        </p>

                    <h2> HISTÓRIA </h2>
                        <p>
                            Fundada no ano de 2022 por um grupo de estudantes cursando Informática para Internet, surgiu inicialmente como um Trabalho de Conclusão de Curso. A motivação decorreu após notarmos a dificuldade que as escolas possuíam em incentivar os alunos a usar os uniformes propostos quando estes não eram obrigatórios. O objetivo era unir os interesses das instituições e dos alunos de forma a gerar conforto, beleza e identificação para ambos.  
                        </p>

                    <h2> VISÃO </h2>
                        <p>
                            Crescer gradativamente e alcançar o maior número de instituições de ensino possíveis, zelando pela segurança dos discentes e proporcionando organização aos consumidores.
                        </p>
                </div>
            </div>
        </>
    )
}

export default QuemSomos;