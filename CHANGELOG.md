## [1.0.0] - 2019-02-18

#### Versão inicial React Native
- adicionado verificação GTIN-13
- visual remodelado
- melhor uso da câmera 

## [0.0.2] - 2018-04-23

#### Adicionado
- informação de produto certificado ou não. 
- link do certificado para ser aberto no navegador do Android

## [0.0.1] - 2018-04-17

#### Versão inicial
- lê e valida barcode via inserção por teclado
- lê e valida barcode via câmera
- lê e valida data via inserção por teclado
- concatena barcode + data e gera endereço hexa via keccak_256
- busca transações em cima do endereço hexa via API do ethplorer
- decodifica pra ascii as informações da API e exibe pro usuário