const prompt = require("prompt-sync")();

const turno = require("./modulos/turno.js");
const curso = require("./modulos/curso.js");
const materia = require("./modulos/materia.js");
const aluno = require("./modulos/aluno.js");
const professor = require("./modulos/professor.js");
const sala = require("./modulos/sala.js");
const aula = require("./modulos/aula.js");

console.log("GERENCIAMENTO DE turno DE IMÓVEIS");

while (true) {
  console.log(`
        O que deseja gerenciar?
        1 - turno
        2 - curso
        3 - materia
        4 - aluno
        5 - professor
        6 - sala
        7 - aula
        8 - aluno aula
        0 - Sair
        `);

  const opcaoEntidade = prompt();

  let continuar;
  switch (opcaoEntidade) {
    case "1":
      continuar = true;
      while (continuar) {
        console.log(`
                    GERENCIAMENTO DE turno
    
                    1 - Criar
                    2 - Listar
                    3 - Atualizar
                    4 - Remover
                    5 - Sair
                    
                    `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            turno.criar();
            break;
          case "2":
            turno.listar();
            break;
          case "3":
            turno.atualizar();
            break;
          case "4":
            turno.remover();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;

    case "2":
      continuar = true;
      while (continuar) {
        console.log(`
                    GERENCIAMENTO DE curso
    
                    1 - Criar
                    2 - Listar
                    3 - Atualizar
                    4 - Remover
                    5 - Sair
                    
                    `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            curso.criar();
            break;
          case "2":
            curso.listar();
            break;
          case "3":
            curso.atualizar();
            break;
          case "4":
            curso.remover();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
    case "3":
      continuar = true;
      while (continuar) {
        console.log(`
                      GERENCIAMENTO DE materia
      
                      1 - Criar
                      2 - Listar
                      3 - Atualizar
                      4 - Remover
                      5 - Sair
                      
                      `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            materia.criar();
            break;
          case "2":
            materia.listar();
            break;
          case "3":
            materia.atualizar();
            break;
          case "4":
            materia.remover();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
    case "4":
      continuar = true;
      while (continuar) {
        console.log(`
                      GERENCIAMENTO DE IMÓVEL
      
                      1 - Criar
                      2 - Listar
                      3 - Atualizar
                      4 - Remover
                      5 - Sair
                      
                      `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            aluno.criar();
            break;
          case "2":
            aluno.listar();
            break;
          case "3":
            aluno.atualizar();
            break;
          case "4":
            aluno.remover();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
    case "5":
      continuar = true;
      while (continuar) {
        console.log(`
                        GERENCIAMENTO DE professorS
        
                        1 - Criar
                        2 - Listar
                        3 - Atualizar
                        4 - Remover
                        5 - Sair
                        
                        `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            professor.criar();
            break;
          case "2":
            professor.listar();
            break;
          case "3":
            professor.atualizar();
            break;
          case "4":
            professor.remover();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;

    case "6":
      continuar = true;
      while (continuar) {
        console.log(`
                          GERENCIAMENTO DE sala
          
                          1 - Criar
                          2 - Listar
                          3 - Atualizar
                          4 - Remover
                          5 - Sair
                          
                          `);
      
      const opcaoServico = prompt();

      switch (opcaoServico) {
        case "1":
          sala.criar();
          break;
        case "2":
          sala.listar();
          break;
        case "3":
          sala.atualizar();
          break;
        case "4":
          sala.remover();
          break;
        case "5":
          continuar = false;
          break;
        default:
          console.log("Opcão inválida");
          break;
      }
    }
      break;
    case "7":
      continuar = true;
      while (continuar) {
        console.log(`
                        GERENCIAMENTO DE professorS
        
                        1 - Criar
                        2 - Listar
                        3 - Atualizar
                        4 - Remover
                        5 - Sair
                        
                        `);
        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            aula.criar();
            break;
          case "2":
            aula.listar();
            break;
          case "3":
            aula.atualizar();
            break;
          case "4":
            aula.remover();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
    case "8":
      continuar = true;
      while (continuar) {
        console.log(`
                        GERENCIAMENTO DE professorS
        
                        1 - Criar
                        2 - Listar
                        3 - Atualizar
                        4 - Remover
                        5 - Sair
                        
                        `);
        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            aluno_aula.criar();
            break;
          case "2":
            aluno_aula.listar();
            break;
          case "3":
            aluno_aula.atualizar();
            break;
          case "4":
            aluno_aula.remover();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
    case "0":
      process.exit(0);
      break;
    default:
      console.log("Opcão inválida");
      break;
  }
}
