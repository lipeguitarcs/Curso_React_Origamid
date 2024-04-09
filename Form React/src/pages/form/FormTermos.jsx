import React, { useState } from 'react';
import { TermoStyle } from "./formsStyle";
import FooterTermo from '../../components/footer/FooterTermo';

const FormTermos = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TermoStyle className="col-8 m-auto">
      <h1 className="tos-title">Fique tranquilo, seus dados estão seguros!</h1>
      <div className="tos-border">
      <div className="tos-box">
        <h2>
          Esta política de Termos de Uso é válida a partir de Fevereiro de 2024.
        </h2>
        <p>
          <span className="upperCase">Termos de uso</span> — Pride Corretora
        </p>
        <p>
          Pride Corretora, pessoa jurídica de direito privado descreve, através deste documento, as regras de uso do site pridecorretora.com.br e qualquer outro site, loja ou aplicativo operado pelo proprietário.
        </p>
        <p>
          Ao navegar neste website, consideramos que você está de acordo com os Termos de Uso abaixo.
        </p>
        <p>
          Caso você não esteja de acordo com as condições deste contrato, pedimos que não faça mais uso deste website, muito menos cadastre-se ou envie os seus dados pessoais.
        </p>
        <p>
          Se modificarmos nossos Termos de Uso, publicaremos o novo texto neste website, com a data de revisão atualizada. Podemos alterar este documento a qualquer momento. Caso haja alteração significativa nos termos deste contrato, podemos informá-lo por meio das informações de contato que tivermos em nosso banco de dados ou por meio de notificações.
        </p>
        <p>
          A utilização deste website após as alterações significa que você aceitou os Termos de Uso revisados. Caso, após a leitura da versão revisada, você não esteja de acordo com seus termos, favor encerrar o seu acesso.
        </p>

        <ul>
          Seção 1 - Usuário
        
          <li>
            A utilização deste website atribui de forma automática a condição de Usuário e implica a plena aceitação de todas as diretrizes e condições incluídas nestes Termos.
          </li>
        </ul>

        <ul>

          Seção 2 - Adesão em conjunto com a Política de Privacidade
          <li>
            A utilização deste website acarreta a adesão aos presentes Termos de Uso e a versão mais atualizada da Política de Privacidade de Pride Corretora.
          </li>
        </ul>

        <ul>

          Seção 3 - Condições de acesso
          <li>
            <li>
              Em geral, o acesso ao website da Pride Corretora possui caráter gratuito e não exige prévia inscrição ou registro.
            </li>
            <li>
              Contudo, para usufruir de algumas funcionalidades, o usuário poderá precisar efetuar um cadastro, criando uma conta de usuário com login e senha próprios para acesso.
            </li>
            <li>
              É de total responsabilidade do usuário fornecer apenas informações corretas, autênticas, válidas, completas e atualizadas, bem como não divulgar o seu login e senha para terceiros.
            </li>
            <li>
              Partes deste website oferecem ao usuário a opção de publicar comentários em determinadas áreas. Pride Corretora não consente com a publicação de conteúdos que tenham natureza discriminatória, ofensiva ou ilícita, ou ainda infrinjam direitos de autor ou quaisquer outros direitos de terceiros.
            </li>
            <li>
              A publicação de quaisquer conteúdos pelo usuário deste website, incluindo mensagens e comentários, implica em licença não-exclusiva, irrevogável e irretratável, para sua utilização, reprodução e publicação pela Pride Corretora no seu website, plataformas e aplicações de internet, ou ainda em outras plataformas, sem qualquer restrição ou limitação.
            </li>
          </li>
        </ul>

        <ul>

          Seção 4 - Cookies
            <li>
              Informações sobre o seu uso neste website podem ser coletadas a partir de cookies. Cookies são informações armazenadas diretamente no computador que você está utilizando. Os cookies permitem a coleta de informações tais como o tipo de navegador, o tempo despendido no website, as páginas visitadas, as preferências de idioma, e outros dados de tráfego anônimos. Nós e nossos prestadores de serviços utilizamos informações para proteção de segurança, para facilitar a navegação, exibir informações de modo mais eficiente, e personalizar sua experiência ao utilizar este website, assim como para rastreamento online. Também coletamos informações estatísticas sobre o uso do website para aprimoramento contínuo do nosso design e funcionalidade, para entender como o website é utilizado e para auxiliá-lo a solucionar questões relevantes.
            </li>
            <li>
              Caso não deseje que suas informações sejam coletadas por meio de cookies, há um procedimento simples na maior parte dos navegadores que permite que os cookies sejam automaticamente rejeitados, ou oferece a opção de aceitar ou rejeitar a transferência de um cookie (ou cookies) específico(s) de um site determinado para o seu computador. Entretanto, isso pode gerar inconvenientes no uso do website.
            </li>
            <li>
              As definições que escolher podem afetar a sua experiência de navegação e o funcionamento que exige a utilização de cookies. Neste sentido, rejeitamos qualquer responsabilidade pelas consequências resultantes do funcionamento limitado deste website provocado pela desativação de cookies no seu dispositivo (incapacidade de definir ou ler um cookie).
            </li>
        </ul>

        <ul>

          Seção 5 - Propriedade Intelectual
          <li>
            Todos os elementos de Pride Corretora são de propriedade intelectual da mesma ou de seus licenciados. Estes Termos ou a utilização do website não concede a você qualquer licença ou direito de uso dos direitos de propriedade intelectual da Pride Corretora ou de terceiros.
          </li>
        </ul>

        <ul>

          Seção 6 - Links para sites de terceiros
            <li>
              Este website poderá, de tempos a tempos, conter links de hipertexto que redirecionará você para sites das redes dos nossos parceiros, anunciantes, fornecedores etc. Se você clicar em um desses links para qualquer um desses sites, lembre-se que cada site possui as suas próprias práticas de privacidade e que não somos responsáveis por essas políticas. Consulte as referidas políticas antes de enviar quaisquer Dados Pessoais para esses sites.
            </li>
            <li>
              Não nos responsabilizamos pelas políticas e práticas de coleta, uso e divulgação (incluindo práticas de proteção de dados) de outras organizações, tais como Facebook, Apple, Google, Microsoft, ou de qualquer outro desenvolvedor de software ou provedor de aplicativo, loja de mídia social, sistema operacional, prestador de serviços de internet sem fio ou fabricante de dispositivos, incluindo todos os Dados Pessoais que divulgar para outras organizações por meio dos aplicativos, relacionadas a tais aplicativos, ou publicadas em nossas páginas em mídias sociais. Nós recomendamos que você se informe sobre a política de privacidade e termos de uso de cada site visitado ou de cada prestador de serviço utilizado.
            </li>
        </ul>

        <ul>

          Seção 7 - Prazos e alterações
          <li>
            O funcionamento deste website se dá por prazo indeterminado.
          <li>
          </li>
            O website no todo ou em cada uma das suas seções, pode ser encerrado, suspenso ou interrompido unilateralmente por Pride Corretora, a qualquer momento e sem necessidade de prévio aviso.
          </li>
        </ul>

        <ul>

          Seção 8 - Dados pessoais
          <li>
            Durante a utilização deste website, certos dados pessoais serão coletados e tratados por Pride Corretora e/ou pelos Parceiros. As regras relacionadas ao tratamento de dados pessoais de Pride Corretora estão estipuladas na Política de Privacidade.
          </li>
        </ul>

        <ul>

          Seção 9 - Contato
          <li>
            Caso você tenha qualquer dúvida sobre os Termos de Uso, por favor, entre em contato pelo email suporte@pridecorretora.com.br.
          </li>
        </ul>
      </div>
      </div>

      <FooterTermo />
    </TermoStyle>
  );
}

export default FormTermos;