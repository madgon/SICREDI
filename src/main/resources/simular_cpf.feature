#language: pt
@funcionales
Funcionalidade: Simular una Restriccion al CPF

Como un Associado
Me gustaria saber si un CPF tiene Restricciones
Para eu ver a tabela de resultado com Mes e Valor

Esquema do Cenário: Deve validar as restricoes
Dado que deseo ver si un CPF tiene restricoes
Quando ingreso el numero "<cpf>"
Então el CPF <cpf> tiene problema

Exemplos: 
| cpf         |
| 97093236014 |
| 60094146012 |
| 84809766080 |
| 62648716050 |
| 26276298085 |
| 01317496094 |
| 55856777050 |
| 19626829001 |
| 24094592008 |
| 58063164083 |

Esquema do Cenário: Deve validar una simulacion
  Dado que deseo ingresar un Usuario
  Quando ingreso su nombre "<nombre>", CPF <nroCPF>, correo "<email>", valor <valor>, cuotas <parcela>, su tipo "<seguro>"
  Então lanza el mensaje "<mensaje>"

  Exemplos:
| nombre    |  nroCPF      |      email     | valor | parcela |           mensaje          | seguro |
| Pepe Lopez| 69174275194  | lala@gmail.com | 1200  |    3    |Simulação criada com sucesso|  true  |
  
  Esquema do Cenário: Deve invalidar una simulacion incompleta
    Dado que quiero ingresar un Usuario incompleto
    Quando ingreso su nombre "<nom>", cpf <CPF>, correo "<mail>", valor <vals>, cuota <cuot>
    Então lanzara el mensaje "<men>"

    Exemplos:
   |nom| CPF           | mail           | vals      |cuot  |
   |l  | 09993444539   | jose@mail.com    | 10       |  2  |
    
Esquema do Cenario: Deve validar la duplicidad de CPFs
  Dado que queiro ingresar un User ya ingresado
  Quando ingreso su nombre "<name>", cpf <number>, correo "<send>", valor <number2>, cuota <number3> , su tipo "<type>"
  E ingreso su nombre "<name>", cpf <number>, correo "<send>", valor <number2>, cuota <number3> , su tipo "<type>"
  Entao Debe validar el "<message>"

  Exemplos:
  |name | number      | send         | number2    | number3 | type  |  message         |
  | Juan| 1990409564 |lop@mail.com  |    1200    |    3    |true   | CPF já existente  |

  #Este escenario esta fallando porque deberia retornar 409 y esta retornando 400.


Cenario: Deve validar listas
    Dado deseo ver las simulaciones
    Quando tenga simulaciones mayor
    Entao hara el listado

Cenário: Deve validar no existir simulaciones
  Dado deseo obtener el listado de simulaciones
  Quando tenga simulaciones menor
  Entao no hara el listado
#Este escenario retorna 200 debido a que la lista contiene datos.

  Esquema do Cenario: Deve retornar la datos por CPF
    Dado quiero ver si el usuario esta ingresado
    Quando ingreso el <cpf>
    Entao retorna su acertiva.

    Exemplos:
      | cpf        |
      |66414919004 |


Esquema do Cenario: Deve eliminar segun ID de usuario
  Dado deseo eliminar una simulacion
  Quando ingrese su <ID>
  Entao retorna simulacion eliminada
  Exemplos:
  |      ID     |
  |      11     |

Esquema do Cenario: Deve informar que ID no existe
  Dado deseo eliminar una simulacion sin ID
  Quando se ingrese su <id>
  Entao retorna el ID ingresado no esta registrado
  Exemplos:
  |      id      |
  |  350         |
  #Este escenario deberia retornar 404 pero continua retornando 200 o sea tiene bug la API.

