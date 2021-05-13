$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("simular_cpf.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Simular una Restriccion al CPF",
  "description": "\nComo un Associado\nMe gustaria saber si un CPF tiene Restricciones\nPara eu ver a tabela de resultado com Mes e Valor",
  "id": "simular-una-restriccion-al-cpf",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@funcionales"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Deve validar as restricoes",
  "description": "",
  "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 10,
  "name": "que deseo ver si un CPF tiene restricoes",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "ingreso el numero \"\u003ccpf\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "recibo el mensaje \"\u003cmensagem\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes;",
  "rows": [
    {
      "cells": [
        "cpf",
        "mensagem"
      ],
      "line": 15,
      "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes;;1"
    },
    {
      "cells": [
        "97093236014",
        "\"O CPF 97093236014 tem problema\""
      ],
      "line": 16,
      "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes;;2"
    },
    {
      "cells": [
        "60094146012",
        "\"O CPF 60094146012 tem problema\""
      ],
      "line": 17,
      "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes;;3"
    },
    {
      "cells": [
        "84809766080",
        "\"O CPF 84809766080 tem problema\""
      ],
      "line": 18,
      "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes;;4"
    },
    {
      "cells": [
        "62648716050",
        "\"O CPF 62648716050 tem problema\""
      ],
      "line": 19,
      "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes;;5"
    },
    {
      "cells": [
        "26276298085",
        "\"O CPF 26276298085 tem problema\""
      ],
      "line": 20,
      "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes;;6"
    },
    {
      "cells": [
        "01317496094",
        "\"O CPF 01317496094 tem problema\""
      ],
      "line": 21,
      "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes;;7"
    },
    {
      "cells": [
        "55856777050",
        "\"O CPF 55856777050 tem problema\""
      ],
      "line": 22,
      "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes;;8"
    },
    {
      "cells": [
        "19626829001",
        "\"O CPF 19626829001 tem problema\""
      ],
      "line": 23,
      "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes;;9"
    },
    {
      "cells": [
        "24094592008",
        "\"O CPF 24094592008 tem problema\""
      ],
      "line": 24,
      "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes;;10"
    },
    {
      "cells": [
        "58063164083",
        "\"O CPF 58063164083 tem problema\""
      ],
      "line": 25,
      "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes;;11"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 16,
  "name": "Deve validar as restricoes",
  "description": "",
  "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionales"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que deseo ver si un CPF tiene restricoes",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "ingreso el numero \"97093236014\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "recibo el mensaje \"\"O CPF 97093236014 tem problema\"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "PruebasSteps.que_deseo_ver_si_un_CPF_tiene_restricoes()"
});
formatter.result({
  "duration": 865923652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "97093236014",
      "offset": 19
    }
  ],
  "location": "PruebasSteps.ingreso_el_numero(String)"
});
formatter.result({
  "duration": 7498410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "97093236014",
      "offset": 26
    },
    {
      "val": "",
      "offset": 51
    }
  ],
  "location": "PruebasSteps.recebo_a_mensagem_O_CPF_tem_problema(String,int,String)"
});
formatter.result({
  "duration": 3273094895,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cO CPF 9[7093236014] tem problema\u003e but was:\u003cO CPF 9[999999999] tem problema\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat uy.ce.jmadrid.PruebasSteps.recebo_a_mensagem_O_CPF_tem_problema(PruebasSteps.java:50)\n\tat ✽.Então recibo el mensaje \"\"O CPF 97093236014 tem problema\"\"(simular_cpf.feature:12)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 17,
  "name": "Deve validar as restricoes",
  "description": "",
  "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionales"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que deseo ver si un CPF tiene restricoes",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "ingreso el numero \"60094146012\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "recibo el mensaje \"\"O CPF 60094146012 tem problema\"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "PruebasSteps.que_deseo_ver_si_un_CPF_tiene_restricoes()"
});
formatter.result({
  "duration": 173236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60094146012",
      "offset": 19
    }
  ],
  "location": "PruebasSteps.ingreso_el_numero(String)"
});
formatter.result({
  "duration": 125426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "60094146012",
      "offset": 26
    },
    {
      "val": "",
      "offset": 51
    }
  ],
  "location": "PruebasSteps.recebo_a_mensagem_O_CPF_tem_problema(String,int,String)"
});
formatter.result({
  "duration": 161379784,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cO CPF 9[7093236014] tem problema\u003e but was:\u003cO CPF 9[999999999] tem problema\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat uy.ce.jmadrid.PruebasSteps.recebo_a_mensagem_O_CPF_tem_problema(PruebasSteps.java:50)\n\tat ✽.Então recibo el mensaje \"\"O CPF 60094146012 tem problema\"\"(simular_cpf.feature:12)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 18,
  "name": "Deve validar as restricoes",
  "description": "",
  "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionales"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que deseo ver si un CPF tiene restricoes",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "ingreso el numero \"84809766080\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "recibo el mensaje \"\"O CPF 84809766080 tem problema\"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "PruebasSteps.que_deseo_ver_si_un_CPF_tiene_restricoes()"
});
formatter.result({
  "duration": 35156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "84809766080",
      "offset": 19
    }
  ],
  "location": "PruebasSteps.ingreso_el_numero(String)"
});
formatter.result({
  "duration": 65049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "84809766080",
      "offset": 26
    },
    {
      "val": "",
      "offset": 51
    }
  ],
  "location": "PruebasSteps.recebo_a_mensagem_O_CPF_tem_problema(String,int,String)"
});
formatter.result({
  "duration": 111549354,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cO CPF 9[7093236014] tem problema\u003e but was:\u003cO CPF 9[999999999] tem problema\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat uy.ce.jmadrid.PruebasSteps.recebo_a_mensagem_O_CPF_tem_problema(PruebasSteps.java:50)\n\tat ✽.Então recibo el mensaje \"\"O CPF 84809766080 tem problema\"\"(simular_cpf.feature:12)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 19,
  "name": "Deve validar as restricoes",
  "description": "",
  "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionales"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que deseo ver si un CPF tiene restricoes",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "ingreso el numero \"62648716050\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "recibo el mensaje \"\"O CPF 62648716050 tem problema\"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "PruebasSteps.que_deseo_ver_si_un_CPF_tiene_restricoes()"
});
formatter.result({
  "duration": 241395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "62648716050",
      "offset": 19
    }
  ],
  "location": "PruebasSteps.ingreso_el_numero(String)"
});
formatter.result({
  "duration": 149240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "62648716050",
      "offset": 26
    },
    {
      "val": "",
      "offset": 51
    }
  ],
  "location": "PruebasSteps.recebo_a_mensagem_O_CPF_tem_problema(String,int,String)"
});
formatter.result({
  "duration": 74644535,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cO CPF 9[7093236014] tem problema\u003e but was:\u003cO CPF 9[999999999] tem problema\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat uy.ce.jmadrid.PruebasSteps.recebo_a_mensagem_O_CPF_tem_problema(PruebasSteps.java:50)\n\tat ✽.Então recibo el mensaje \"\"O CPF 62648716050 tem problema\"\"(simular_cpf.feature:12)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 20,
  "name": "Deve validar as restricoes",
  "description": "",
  "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes;;6",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionales"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que deseo ver si un CPF tiene restricoes",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "ingreso el numero \"26276298085\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "recibo el mensaje \"\"O CPF 26276298085 tem problema\"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "PruebasSteps.que_deseo_ver_si_un_CPF_tiene_restricoes()"
});
formatter.result({
  "duration": 34736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "26276298085",
      "offset": 19
    }
  ],
  "location": "PruebasSteps.ingreso_el_numero(String)"
});
formatter.result({
  "duration": 88361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "26276298085",
      "offset": 26
    },
    {
      "val": "",
      "offset": 51
    }
  ],
  "location": "PruebasSteps.recebo_a_mensagem_O_CPF_tem_problema(String,int,String)"
});
formatter.result({
  "duration": 64171671,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cO CPF 9[7093236014] tem problema\u003e but was:\u003cO CPF 9[999999999] tem problema\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat uy.ce.jmadrid.PruebasSteps.recebo_a_mensagem_O_CPF_tem_problema(PruebasSteps.java:50)\n\tat ✽.Então recibo el mensaje \"\"O CPF 26276298085 tem problema\"\"(simular_cpf.feature:12)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 21,
  "name": "Deve validar as restricoes",
  "description": "",
  "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes;;7",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionales"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que deseo ver si un CPF tiene restricoes",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "ingreso el numero \"01317496094\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "recibo el mensaje \"\"O CPF 01317496094 tem problema\"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "PruebasSteps.que_deseo_ver_si_un_CPF_tiene_restricoes()"
});
formatter.result({
  "duration": 28843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01317496094",
      "offset": 19
    }
  ],
  "location": "PruebasSteps.ingreso_el_numero(String)"
});
formatter.result({
  "duration": 48563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "01317496094",
      "offset": 26
    },
    {
      "val": "",
      "offset": 51
    }
  ],
  "location": "PruebasSteps.recebo_a_mensagem_O_CPF_tem_problema(String,int,String)"
});
formatter.result({
  "duration": 104182478,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cO CPF 9[7093236014] tem problema\u003e but was:\u003cO CPF 9[999999999] tem problema\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat uy.ce.jmadrid.PruebasSteps.recebo_a_mensagem_O_CPF_tem_problema(PruebasSteps.java:50)\n\tat ✽.Então recibo el mensaje \"\"O CPF 01317496094 tem problema\"\"(simular_cpf.feature:12)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 22,
  "name": "Deve validar as restricoes",
  "description": "",
  "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes;;8",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionales"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que deseo ver si un CPF tiene restricoes",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "ingreso el numero \"55856777050\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "recibo el mensaje \"\"O CPF 55856777050 tem problema\"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "PruebasSteps.que_deseo_ver_si_un_CPF_tiene_restricoes()"
});
formatter.result({
  "duration": 73424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55856777050",
      "offset": 19
    }
  ],
  "location": "PruebasSteps.ingreso_el_numero(String)"
});
formatter.result({
  "duration": 87031,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "55856777050",
      "offset": 26
    },
    {
      "val": "",
      "offset": 51
    }
  ],
  "location": "PruebasSteps.recebo_a_mensagem_O_CPF_tem_problema(String,int,String)"
});
formatter.result({
  "duration": 57190319,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cO CPF 9[7093236014] tem problema\u003e but was:\u003cO CPF 9[999999999] tem problema\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat uy.ce.jmadrid.PruebasSteps.recebo_a_mensagem_O_CPF_tem_problema(PruebasSteps.java:50)\n\tat ✽.Então recibo el mensaje \"\"O CPF 55856777050 tem problema\"\"(simular_cpf.feature:12)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 23,
  "name": "Deve validar as restricoes",
  "description": "",
  "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes;;9",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionales"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que deseo ver si un CPF tiene restricoes",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "ingreso el numero \"19626829001\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "recibo el mensaje \"\"O CPF 19626829001 tem problema\"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "PruebasSteps.que_deseo_ver_si_un_CPF_tiene_restricoes()"
});
formatter.result({
  "duration": 28185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19626829001",
      "offset": 19
    }
  ],
  "location": "PruebasSteps.ingreso_el_numero(String)"
});
formatter.result({
  "duration": 45303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "19626829001",
      "offset": 26
    },
    {
      "val": "",
      "offset": 51
    }
  ],
  "location": "PruebasSteps.recebo_a_mensagem_O_CPF_tem_problema(String,int,String)"
});
formatter.result({
  "duration": 65957733,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cO CPF 9[7093236014] tem problema\u003e but was:\u003cO CPF 9[999999999] tem problema\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat uy.ce.jmadrid.PruebasSteps.recebo_a_mensagem_O_CPF_tem_problema(PruebasSteps.java:50)\n\tat ✽.Então recibo el mensaje \"\"O CPF 19626829001 tem problema\"\"(simular_cpf.feature:12)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 24,
  "name": "Deve validar as restricoes",
  "description": "",
  "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes;;10",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionales"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que deseo ver si un CPF tiene restricoes",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "ingreso el numero \"24094592008\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "recibo el mensaje \"\"O CPF 24094592008 tem problema\"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "PruebasSteps.que_deseo_ver_si_un_CPF_tiene_restricoes()"
});
formatter.result({
  "duration": 36026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24094592008",
      "offset": 19
    }
  ],
  "location": "PruebasSteps.ingreso_el_numero(String)"
});
formatter.result({
  "duration": 44719,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "24094592008",
      "offset": 26
    },
    {
      "val": "",
      "offset": 51
    }
  ],
  "location": "PruebasSteps.recebo_a_mensagem_O_CPF_tem_problema(String,int,String)"
});
formatter.result({
  "duration": 188275182,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cO CPF 9[7093236014] tem problema\u003e but was:\u003cO CPF 9[999999999] tem problema\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat uy.ce.jmadrid.PruebasSteps.recebo_a_mensagem_O_CPF_tem_problema(PruebasSteps.java:50)\n\tat ✽.Então recibo el mensaje \"\"O CPF 24094592008 tem problema\"\"(simular_cpf.feature:12)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 25,
  "name": "Deve validar as restricoes",
  "description": "",
  "id": "simular-una-restriccion-al-cpf;deve-validar-as-restricoes;;11",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionales"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que deseo ver si un CPF tiene restricoes",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "ingreso el numero \"58063164083\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "recibo el mensaje \"\"O CPF 58063164083 tem problema\"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "PruebasSteps.que_deseo_ver_si_un_CPF_tiene_restricoes()"
});
formatter.result({
  "duration": 28986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "58063164083",
      "offset": 19
    }
  ],
  "location": "PruebasSteps.ingreso_el_numero(String)"
});
formatter.result({
  "duration": 48675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "58063164083",
      "offset": 26
    },
    {
      "val": "",
      "offset": 51
    }
  ],
  "location": "PruebasSteps.recebo_a_mensagem_O_CPF_tem_problema(String,int,String)"
});
formatter.result({
  "duration": 92096398,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cO CPF 9[7093236014] tem problema\u003e but was:\u003cO CPF 9[999999999] tem problema\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat uy.ce.jmadrid.PruebasSteps.recebo_a_mensagem_O_CPF_tem_problema(PruebasSteps.java:50)\n\tat ✽.Então recibo el mensaje \"\"O CPF 58063164083 tem problema\"\"(simular_cpf.feature:12)\n",
  "status": "failed"
});
});