(function (global) {
    var version = '1.0.0';
    
    var xmlhttp = {};

    camara.opcoes = {
        url: {
            deputados: '/SitCamaraWS/Deputados.asmx',
            orgaos: '/SitCamaraWS/Orgaos.asmx',
            proposicoes: '/SitCamaraWS/Proposicoes.asmx',
            sessoes: '/SitCamaraWS/SessoesReunioes.asmx'
        },
        host: '//www.camara.gov.br',
        script: 'requisicao.php',
        response: 'xml'
    };

    // métodos publicos
    camara.metodos = {
        // MÉTODOS PARA INFORMAÇÕES SOBRE DEPUTADOS
        ObterDeputados: function () {
            var url = camara.opcoes.url.deputados + '/ObterDeputados';

            return request(url);
        },
        ObterDetalhesDeputado: function (id, numLeg) {
            numLeg = (numLeg) ? numLeg : '';

            var url = camara.opcoes.url.deputados + '/ObterDetalhesDeputado?ideCadastro=' + id + '&numLegislatura=' + numLeg;

            return request(url);
        },
        ObterLideresBancadas: function () {
            var url = camara.opcoes.url.deputados + '/ObterLideresBancadas';

            return request(url);
        },
        ObterPartidosCD: function () {
            var url = camara.opcoes.url.deputados + '/ObterPartidosCD';

            return request(url);
        },
        ObterPartidosBlocoCD: function (numLeg, id) {
            id = (id) ? id : '';

            var url = camara.opcoes.url.deputados + '/ObterPartidosBlocoCD?numLegislatura=' + numLeg + '&idBloco=' + id;

            return request(url);
        },
        // MÉTODOS PARA INFORMAÇÕES SOBRE ORGÃOS
        ListarCargosOrgaosLegislativosCD: function () {
            var url = camara.opcoes.url.orgaos + '/ListarCargosOrgaosLegislativosCD';

            return request(url);
        },
        ListarTiposOrgaos: function () {
            var url = camara.opcoes.url.orgaos + '/ListarTiposOrgaos';

            return request(url);
        },
        ObterAndamento: function (num, ano, sigla, dataIni, codOrgao) {
            var url;

            if (!num)
                throw 'Parâmetro "num" é exigido.';
            else if (!ano)
                throw 'Parâmetro "ano" é exigido.';

            sigla = (sigla) ? sigla : '';
            dataIni = (dataIni) ? dataIni : '';
            codOrgao = (codOrgao) ? codOrgao : '';

            url = camara.opcoes.url.orgaos + '/ObterAndamento?sigla=' + sigla
            url += '&numero=' + num + '&ano=' + ano
            url += '&dataIni=' + dataIni + '&codOrgao=' + codOrgao;

            return request(url);
        },
        ObterEmendasSubstitutivoRedacaoFinal: function (tipo, num, ano) {
            var url = camara.opcoes.url.orgaos + '/ObterEmendasSubstitutivoRedacaoFinal?tipo=' + tipo;
            url += '&numero=' + num + '&ano=' + ano;

            return request(url);
        },
        ObterIntegraComissoesRelator: function (tipo, num, ano) {
            var url = camara.opcoes.url.orgaos + '/ObterIntegraComissoesRelator?tipo=' + tipo;
            url += '&numero=' + num + '&ano=' + ano;

            return request(url);
        },
        ObterMembrosOrgao: function (id) {
            var url = camara.opcoes.url.orgaos + '/ObterMembrosOrgao?IDOrgao=' + id;

            return request(url);
        },
        ObterOrgaos: function () {
            var url = camara.opcoes.url.orgaos + '/ObterOrgaos';

            return request(url);
        },
        ObterPauta: function (id, dataIni, dataFim) {
            var url;

            dataIni = (dataIni) ? dataIni : '';
            dataFim = (dataFim) ? dataFim : '';

            url = camara.opcoes.url.orgaos + '/ObterPauta?IDOrgao=' + id + '&datIni=' + dataIni + '&datFim=' + dataFim;

            return request(url);
        },
        //ObterRegimeTramitacaoDespacho: function(tipo, sigla, num, numProp, ano, anoProp) {}

        // METODOS PARA PROPOSIÇÕES
        ListarProposicoes: function (sigla, ano, opcoes) {
            var url;

            opcoes = opcoes || {};

            opcoes.numero = (opcoes.numero) ? opcoes.numero : '';
            opcoes.datApresentacaoIni = (opcoes.datApresentacaoIni) ? opcoes.datApresentacaoIni : '';
            opcoes.datApresentacaoFim = (opcoes.datApresentacaoFim) ? opcoes.datApresentacaoFim : '';
            opcoes.idTipoAutor = (opcoes.idTipoAutor) ? opcoes.idTipoAutor : '';
            opcoes.parteNomeAutor = (opcoes.parteNomeAutor) ? opcoes.parteNomeAutor : '';
            opcoes.siglaPartidoAutor = (opcoes.siglaPartidoAutor) ? opcoes.siglaPartidoAutor : '';
            opcoes.siglaUFAutor = (opcoes.siglaUFAutor) ? opcoes.siglaUFAutor : '';
            opcoes.generoAutor = (opcoes.generoAutor) ? opcoes.generoAutor : '';
            opcoes.codEstado = (opcoes.codEstado) ? opcoes.codEstado : '';
            opcoes.codOrgaoEstado = (opcoes.codOrgaoEstado) ? opcoes.codOrgaoEstado : '';
            opcoes.emTramitacao = (opcoes.emTramitacao) ? opcoes.emTramitacao : '';

            url = camara.opcoes.url.proposicoes + '/ListarProposicoes';
            url += '?sigla=' + sigla;
            url += '&numero=' + opcoes.numero;
            url += '&ano=' + ano;
            url += '&datApresentacaoIni=' + opcoes.datApresentacaoIni;
            url += '&datApresentacaoFim=' + opcoes.datApresentacaoFim;
            url += '&parteNomeAutor=' + opcoes.parteNomeAutor;
            url += '&idTipoAutor=' + opcoes.idTipoAutor;
            url += '&siglaPartidoAutor=' + opcoes.siglaPartidoAutor;
            url += '&siglaUFAutor=' + opcoes.siglaUFAutor;
            url += '&generoAutor=' + opcoes.generoAutor;
            url += '&codEstado=' + opcoes.codEstado;
            url += '&codOrgaoEstado=' + opcoes.codOrgaoEstado;
            url += '&emTramitacao=' + opcoes.emTramitacao;

            return request(url);
        },
        ListarSiglasTipoProposicao: function () {
            var url = camara.opcoes.url.proposicoes + '/ListarSiglasTipoProposicao';

            return request(url);
        },
        ListarSituacoesProposicao: function () {
            var url = camara.opcoes.url.proposicoes + '/ListarSituacoesProposicao';

            return request(url);
        },
        ListarTiposAutores: function () {
            var url = camara.opcoes.url.proposicoes + '/ListarTiposAutores';

            return request(url);
        },
        ObterProposicao: function (tipo, num, ano) {
            var url = camara.opcoes.url.proposicoes + '/ObterProposicao?tipo=' + tipo;
            url += '&numero=' + num + '&ano=' + ano;

            return request(url);
        },
        ObterProposicaoPorID: function (id) {
            var url = camara.opcoes.url.proposicoes + '/ListarSituacoesProposicao?IdProp=' + id;

            return request(url);
        },
        ObterVotacaoProposicao: function (tipo, num, ano) {
            var url = camara.opcoes.url.proposicoes + '/ObterVotacaoProposicao?tipo=' + tipo;
            url += '&numero=' + num;
            url += '&ano=' + ano;

            return request(url);
        },
        ListarProposicoesVotadasEmPlenario: function (ano, tipo) {
            var url = camara.opcoes.url.proposicoes + '/ListarProposicoesVotadasEmPlenario?ano=' + ano;
            url += '&tipo=' + tipo;

            return request(url);
        },
        ListarProposicoesTramitadasNoPeriodo: function (dtInicio, dtFim) {
            var url = camara.opcoes.url.proposicoes + '/ListarProposicoesTramitadasNoPeriodo?dtInicio=' + dtInicio;
            url += '&dtFim=' + dtFim;

            return request(url);
        },
        // METODOS PARA SESSOES E REUNIÕES
        ListarDiscursosPlenario: function (dtIni, dtFim, opcoes) {
            var url;

            opcoes = opcoes || {};

            opcoes.codigoSessao = (opcoes.codigoSessao) ? opcoes.codigoSessao : '';
            opcoes.parteNomeParlamentar = (opcoes.parteNomeParlamentar) ? opcoes.parteNomeParlamentar : '';
            opcoes.partido = (opcoes.partido) ? opcoes.partido : '';
            opcoes.uf = (opcoes.uf) ? opcoes.uf : '';

            url = camara.opcoes.url.sessoes + '/ListarDiscursosPlenario';
            url += '?Dataini=' + dtIni;
            url += '&DataFim=' + dtFim;
            url += '&codigoSessao=' + opcoes.codigoSessao;
            url += '&parteNomeParlamentar=' + opcoes.parteNomeParlamentar;
            url += '&siglePartido=' + opcoes.partido;
            url += '&siglaUF=' + opcoes.uf;

            return request(url);
        },
        ListarPresencasDia: function (data, matricula, partido, uf) {
            var url;

            matricula = (matricula) ? matricula : '';
            partido = (partido) ? partido : '';
            uf = (uf) ? uf : '';

            url = camara.opcoes.url.sessoes + '/ListarDiscursosPlenario';
            url += '?data=' + data;
            url += '&numLegislatura=54';
            url += '&numLegislatura=' + matricula;
            url += '&siglaPartido' + partido;
            url += '&siglaUF' + uf;

            return request(url);
        },
        ListarPresencasParlamentar: function (dataIni, dataFim, matricula) {
            var url = camara.opcoes.url.sessoes + '/ListarPresencasParlamentar';
            url += '?dataIni=' + dataIni;
            url += '&dataFim=' + dataFim;
            url += '&numMatriculaParlamentar=' + matricula;

            return request(url);
        },
        ListarSituacoesReuniaoSessao: function () {
            var url = camara.opcoes.url.sessoes + '/ListarSituacoesReuniaoSessao';

            return request(url);
        },
        ObterInteiroTeorDiscursosPlenario: function (codSessao, numOrador, numQuarto, numIsercao) {
            var url = camara.opcoes.url.sessoes + '/ListarDiscursosPlenario';
            url += '?codSessao=' + codSessao;
            url += '&numOrador=' + numOrador;
            url += '&numQuarto=' + numQuarto;
            url += '&numInsercao=' + numInsercao;

            return request(url);
        }
    };

    request.messages = {
        onwait: function (callback) {
            xmlhttp.onreadystatechange = callback();
            return this;
        },
        onresponse: function (callback) {
            xmlhttp.onreadystatechange = function () {
                if ((xmlhttp.readyState === 4) && (xmlhttp.status === 200)) {
                    callback(xmlhttp.responseXML.documentElement, xmlhttp.status, xmlhttp);
                }
            }

            return this;
        }
    };

    function request(url) {
        url = encodeURIComponent(url);
        url = camara.opcoes.script + '?querystring=' + url;

        xmlhttp.open('GET', url, true);
        xmlhttp.send(null);

        return request.messages;
    }

    function initRequest() {
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();

            if (typeof xmlhttp.overrideMimeType != 'undefined') {
                xmlhttp.overrideMimeType('text/xml');
            }
        } else if (window.ActiveXObject) {
            xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
        } else {
            console.log('Seu navegador não suporta XMLHttpRequest.');
        }
    }

    function camara() {
        initRequest();

        return camara.metodos;
    }

    global.Camara = camara();
})(this);
