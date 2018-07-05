import { TestBed, inject } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { VagasService } from './vagas.service';
import { Vaga } from './vaga.model';
import { exec } from 'child_process';

describe('VagasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [VagasService]
    });
  });

  it('should be created', inject([VagasService], (service: VagasService) => {
    expect(service).toBeTruthy();
  }));

  it('Test GetVagas', inject([VagasService], (service: VagasService) => {
    service.getEmpresas().subscribe(vagas => {
      expect(vagas.length).toBe(9);
    });
  }));

  it('Get TopEmpresa', inject([VagasService], (service: VagasService) => {

    const vaga = {
      id: '01',
      Empresa: 'Empresa 01',
      Cargo: 'Desenvolvedor22222222222222' // ??????????????????????
    };

    service.GetTopEmpresa().subscribe(vagaService => {
      expect(vagaService).toBe(vaga);
    });

  }));

  // it('TopEmpresa null', inject([VagasService], (service: VagasService) => {
  //   service.getEmpresas().subscribe(vagaService => {
  //     expect(null)
  //   });
  // }));

});
