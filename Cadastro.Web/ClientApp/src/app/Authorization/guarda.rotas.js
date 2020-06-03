"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GuardaRotas = /** @class */ (function () {
    function GuardaRotas(router, usuarioService) {
        this.router = router;
        this.usuarioService = usuarioService;
    }
    GuardaRotas.prototype.canActivate = function (route, state) {
        if (this.usuarioService.verificarSessao()) {
            return true;
        }
        this.router.navigate(['/entrar'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return GuardaRotas;
}());
exports.GuardaRotas = GuardaRotas;
//# sourceMappingURL=guarda.rotas.js.map