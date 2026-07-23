/**
 * Modelo base para qualquer documento armazenado
 * no Core Normativo.
 */

export default class DocumentModel {

    constructor(data = {}) {

        this.id = data.id ?? "";

        this.tipo = data.tipo ?? "";

        this.categoria = data.categoria ?? "";

        this.titulo = data.titulo ?? "";

        this.numero = data.numero ?? "";

        this.ano = data.ano ?? null;

        this.status = data.status ?? "VIGENTE";

        this.ementa = data.ementa ?? "";

        this.texto = data.texto ?? "";

        this.orgao = data.orgao ?? "";

        this.esfera = data.esfera ?? "Federal";

        this.fonte = data.fonte ?? "";

        this.url = data.url ?? "";

        this.idioma = "pt-BR";

        this.versao = data.versao ?? 1;

        this.hash = data.hash ?? "";

        this.assuntos = data.assuntos ?? [];

        this.palavrasChave = data.palavrasChave ?? [];

        this.tags = data.tags ?? [];

        this.ativo = data.ativo ?? true;

        this.publicadoEm = data.publicadoEm ?? null;

        this.atualizadoEm = data.atualizadoEm ?? null;

        this.criadoEm = data.criadoEm ?? new Date();

    }

    toJSON() {

        return {

            ...this

        };

    }

}