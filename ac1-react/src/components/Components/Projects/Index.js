import './Projects.css';

function Projetos() {
    return (
        <section className="secao4" id="projetos">
            <div className="secao4-div">

                <div className="secao4-div-card">
                    <img src="/images/oii.jpg" width="256" height="256" alt="Sistema de Agendamento" />
                    <h3>Sistema de Agendamento</h3>
                    <p>Projeto completo para clínicas e consultórios, com login de usuários, painel administrativo e integração com calendário.</p>
                </div>

                <div className="secao4-div-card">
                    <img src="/images/dash.jpg" width="256" height="256" alt="Dashboard Financeiro" />
                    <h3>Dashboard Financeiro</h3>
                    <p>Dashboard desenvolvido em React com gráficos dinâmicos e filtros para controle de receitas, despesas e metas mensais.</p>
                </div>

                <div className="secao4-div-card">
                    <img src="/images/images.jpg" width="256" height="256" alt="E-commerce Responsivo" />
                    <h3>E-commerce Responsivo</h3>
                    <p>Loja online com sistema de carrinho, painel de produtos e conexão com API de pagamentos. Totalmente responsivo.</p>
                </div>

            </div>
        </section>
    );
}

export default Projetos;
