import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import Usuario from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';

@Controller('usuario')
export class UsuarioController {

    constructor(private repo: UsuarioRepository) {}

    @Post()
    async Criar(@Body() usuario: Usuario) {
        const novoUsuario = await this.repo.create(usuario);
        return novoUsuario;
    }

    @Get()
    async findAll() {
        const usuarios = await this.repo.findAll();
        return usuarios;
    }

    @Get(':id') 
    async findById(@Param('id') id: string) {
            const usuario = await this.repo.findOne(+id);
            return usuario
    }   

    @Patch(":id") 
    async update(@Param('id') id:string, @Body() usuario: Usuario) {
        const usuarioAtualizado = await this.repo.update({...usuario, id: +id})
        return usuarioAtualizado
    }

    @Delete(':id')
    async delete(@Param('id') id:string) {
        await this.repo.delete(+id);
    }

}
