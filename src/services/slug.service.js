/**
 * Serviço responsável por gerar identificadores únicos
 * e padronizados para documentos.
 */
export default class SlugService {

    static generate(tipo, numero, ano) {

        const slug = tipo
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/\s+/g, "-");

        return `${slug}-${numero}-${ano}`;

    }

}