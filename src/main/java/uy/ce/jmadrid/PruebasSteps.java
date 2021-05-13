package uy.ce.jmadrid;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;
import io.restassured.specification.RequestSpecification;
import org.hamcrest.Matchers;
import org.junit.Assert;


import io.restassured.RestAssured;

import java.util.ArrayList;
import java.util.List;

public class PruebasSteps {
    Response response;

    @Dado("^que deseo ver si un CPF tiene restricoes$")
    public void que_deseo_ver_si_un_CPF_tiene_restricoes() throws Throwable {
        baseURI = "http://localhost:8080";
    }

    @Quando("^ingreso el numero \"([^\"]*)\"$")
    public void ingreso_el_numero(String arg1) throws Throwable {
        baseURI = "http://localhost:8080";

        RequestSpecification request = RestAssured.given().relaxedHTTPSValidation();
        response = request
                .headers("Content-Type","application/json")//configuracion previa a la requisision
                .when().get("/api/v1/restricoes/"+arg1);
        Assert.assertEquals(200, response.statusCode());
    }

    @Então("^el CPF (.*) tiene problema$")
    public void recebo_a_mensagem_O_CPF_tem_problema( String arg2) throws Throwable {

        Assert.assertEquals(200, response.statusCode());

        Assert.assertEquals(response.path("mensagem"), "O CPF " +arg2 +" tem problema");
    }

    @Dado("^que deseo ingresar un Usuario$")
    public void que_deseo_ingresar_un_Usuario() throws Throwable {
        baseURI = "http://localhost:8080";
    }

    @Quando("^ingreso su nombre \"([^\"]*)\", CPF (\\d+), correo \"([^\"]*)\", valor (\\d+), cuotas (\\d+), su tipo \"([^\"]*)\"$")
    public void ingreso_su_nombre_CPF_correo_valor_cuotas_su_tipo(String nombre, Long nroCPF, String email, int valor, Double parcela, String seguro) throws Throwable {
        RequestSpecification request = RestAssured.given().relaxedHTTPSValidation();
        response = request
                .headers("Content-Type","application/json")//configuracion previa a la requisision

                .body("{\"nome\": \""+ nombre +"\", " +
                " \"cpf\": " + nroCPF + "," +
                " \"email\": \"" + email + "\"," +
                " \"valor\": " + valor + "," +
                " \"parcelas\": " + parcela + "," +
                " \"seguro\": " + Boolean.valueOf(seguro) + "}").contentType(ContentType.JSON)
                .when().post("/api/v1/simulacoes/");

                System.out.println("{\"cpf\": "+nroCPF+", " +
                        " \"nome\": \"" + nombre + "\"," +
                        " \"email\": \"" + email + "\"," +
                        " \"valor\": " + valor + "," +
                        " \"parcelas\": " + parcela + "," +
                        " \"seguro\": " + Boolean.valueOf(seguro) + "}");
                Assert.assertEquals(201, response.statusCode());

    }

    @Então("^lanza el mensaje \"([^\"]*)\"$")
    public void lanza_el_mensaje(String arg1) throws Throwable {
     Assert.assertEquals(201, response.statusCode());
    }
    @Dado("^que quiero ingresar un Usuario incompleto$")
    public void que_quiero_ingresar_un_Usuario_incompleto() throws Throwable {
        baseURI = "http://localhost:8080";
    }
    @Quando("^ingreso su nombre \"([^\"]*)\", cpf (\\d+), correo \"([^\"]*)\", valor (\\d+), cuota (\\d+)$")
    public void ingreso_su_nombre_cpf_correo_valor_cuota(String nom, int CPF, String mail, int vals, int cuot) throws Throwable {
        RequestSpecification request = RestAssured.given().relaxedHTTPSValidation();
        response = request
                .headers("Content-Type","application/json")
                .body("{\"nome\": \""+nom+"\", " +
                        " \"cpf\": " + CPF + "," +
                        " \"email\": \"" + mail + "\"," +
                       " \"valor\": " + vals + "," +
                        " \"parcelas\": " + cuot + "," +  "}").contentType(ContentType.JSON)
                        //" \"seguro\": " + Boolean.valueOf(tip)
               .when().post("/api/v1/simulacoes/");
        Assert.assertEquals(400, response.statusCode());
    }

    @Então("^lanzara el mensaje \"([^\"]*)\"$")
    public void lanzara_el_mensaje(String arg1) throws Throwable {
       Assert.assertEquals(400, response.statusCode());
    }


    @Dado("^que queiro ingresar un User ya ingresado$")
    public void que_queiro_ingresar_un_User_ya_ingresado() throws Throwable {
        baseURI = "http://localhost:8080";
    }

    @Quando("^ingreso su nombre \"([^\"]*)\", cpf (\\d+), correo \"([^\"]*)\", valor (\\d+), cuota (\\d+) , su tipo \"([^\"]*)\"$")
    public void ingreso_su_nombre_cpf_correo_valor_cuota_true(String name, int number, String send, int number2, int number3, String type) throws Throwable {
        RequestSpecification request = RestAssured.given().relaxedHTTPSValidation();
        response = request
                .headers("Content-Type","application/json")
                .body("{\"nome\": \""+name+"\", " +
                        " \"cpf\": " + number + "," +
                        " \"email\": \"" + send + "\"," +
                        " \"valor\": " + number2 + "," +
                        " \"parcelas\": " + number3 + "," +
                " \"seguro\": " + Boolean.valueOf(type) +  "}").contentType(ContentType.JSON)

                .when().post("/api/v1/simulacoes/");
        System.out.println("{\"nome\": \""+name+"\", " +
                " \"cpf\": " + number + "," +
                " \"email\": \"" + send + "\"," +
                " \"valor\": " + number2 + "," +
                " \"parcelas\": " + number3 + "," +
                " \"seguro\": " + Boolean.valueOf(type) +  "}");

        Assert.assertEquals(409, response.statusCode());
    }

    @Entao("^Debe validar el \"([^\"]*)\"$")
    public void debe_validar_el(String arg1) throws Throwable {
        Assert.assertEquals(arg1, response.path("mensagem"));
    }
    @Dado("^quiero ver si el usuario esta ingresado$")
    public void quiero_ver_si_el_usuario_esta_ingresado() throws Throwable {
        baseURI = "http://localhost:8080";
    }

    @Quando("^ingreso el (\\d+)$")
    public void ingreso_el(int cpf) throws Throwable {

        RequestSpecification request = RestAssured.given().relaxedHTTPSValidation();
        response = (Response) request
                .headers("Content-Type","application/json")
                .body("{\"cpf\": " + cpf+"}").contentType(ContentType.JSON)
                .when().get("/api/v1/simulacoes/");

    }

    @Entao("^retorna su acertiva\\.$")
    public void retorna_su_lista() throws Throwable {
        Assert.assertEquals(200, response.statusCode());
    }

    @Dado("^deseo ver las simulaciones$")
    public void deseo_ver_las_simulaciones() throws Throwable {
        baseURI = "http://localhost:8080";
    }

    @Quando("^tenga simulaciones mayor$")
    public void tenga_simulaciones_mayor() throws Throwable {
        RequestSpecification request = RestAssured.given().relaxedHTTPSValidation();
            response = request
                .headers("Content-Type","application/json")
                .when().get("/api/v1/simulacoes/");
    }

    @Entao("^hara el listado$")
    public void hara_el_listado() throws Throwable {
        ArrayList<List> listas =
                response.then().extract().path("id");
        Assert.assertEquals(200 , response.statusCode());
        Assert.assertThat(listas.size(), Matchers.greaterThan(1));//mas grande que tal cosa...!
    }

    @Dado("^deseo obtener el listado de simulaciones$")
    public void deseo_obtener_el_listado_de_simulaciones() throws Throwable {
        baseURI = "http://localhost:8080";
    }

    @Quando("^tenga simulaciones menor$")
    public void tenga_simulaciones_menor() throws Throwable {
        RequestSpecification request = RestAssured.given().relaxedHTTPSValidation();
        response = request
                .headers("Content-Type","application/json")
                .when().get("/api/v1/simulacoes/");
    }

    @Entao("^no hara el listado$")
    public void no_hara_el_listado() throws Throwable {
        ArrayList<List> listas =
                response.then().extract().path("id");
        Assert.assertEquals(404 , response.statusCode());
        Assert.assertThat(listas.size(), Matchers.nullValue());//nula.
    }

    @Dado("^deseo eliminar una simulacion$")
    public void deseo_eliminar_una_simulacion() throws Throwable {
        baseURI = "http://localhost:8080";
    }

    @Quando("^ingrese su (\\d+)$")
    public void ingrese_su(int arg1) throws Throwable {
        RequestSpecification request = RestAssured.given().relaxedHTTPSValidation();
        response = request
                .headers("Content-Type","application/json")
                .body("{\"id\": " + arg1+"}").contentType(ContentType.JSON)
                .when().delete("/api/v1/simulacoes/"+arg1);
    }

    @Entao("^retorna simulacion eliminada$")
    public void retorna_simulacion_eliminada() throws Throwable {
        Assert.assertEquals(200, response.statusCode());
    }

    @Dado("^deseo eliminar una simulacion sin ID$")
    public void deseo_eliminar_una_simulacion_sin_ID() throws Throwable {
        baseURI = "http://localhost:8080";
    }

    @Quando("^se ingrese su (\\d+)$")
    public void se_ingrese_su(int arg1) throws Throwable {
        RequestSpecification request = RestAssured.given().relaxedHTTPSValidation();
        response = request
                .headers("Content-Type","application/json")
                .body("{\"id\": " + arg1+"}").contentType(ContentType.JSON)
                .when().delete("/api/v1/simulacoes/"+arg1);
    }

    @Entao("^retorna el ID ingresado no esta registrado$")
    public void retorna_el_ID_ingresado_no_esta_registrado() throws Throwable {
        Assert.assertEquals(404, response.statusCode());
    }

}
