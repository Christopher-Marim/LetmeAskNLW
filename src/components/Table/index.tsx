import '../../styles/table.scss';

interface Product {
  id: number;
  codigo: string;
  nome: string;
  preco: number;
  filial: string;
}

interface props{
  tabela: Product[]
}

export function CustomizedTables({tabela}:props) {
  return (
    <div className="container">
	<table>
		<thead>
			<tr>
				<th>Código</th>
				<th>Nome</th>
				<th>Preço</th>
				<th>Filial</th>
			</tr>
		</thead>
		<tbody>
      {tabela.map((item)=>(
        <tr key={item.id}>
				<td>{item.codigo}</td>
        <td>{item.nome}</td>
        <td>{item.preco}</td>
        <td>{item.filial}</td>
			</tr>
      ))}
		</tbody>
	</table>
</div>
  );
}