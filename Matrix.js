class Matrix{
	
	constructor(rows,cols)
	{
		this.rows = rows;
		this.cols = cols;
		this.matrix = [];
		this.initiate();
	}
	initiate()
	{
		
		for(let x=0;x<this.rows;x++)
		{
			this.matrix[x] = [];
			for(let y=0;y<this.cols;y++)
			{
				this.matrix[x][y] =0;
			}
		}
	}
	randomize()
	{
		
		for(let x=0;x<this.rows;x++)
		{
			for(let y=0;y<this.cols;y++)
			{
				this.matrix[x][y] = Math.floor(Math.random()*10);
			}
		}
	}
	add(n)
	{
		var temp = new Matrix(this.rows,this.cols);
		if(n instanceof Matrix)
		{
			if(n.rows != this.rows || n.cols != this.cols) return undefined;
			for(let x=0;x<this.rows;x++)
			{
				for(let y=0;y<this.cols;y++)
				{
					temp.matrix[x][y] =  this.matrix[x][y] + n.matrix[x][y];
				}
			}
		}
		else
		{
			for(let x=0;x<this.rows;x++)
			{
				for(let y=0;y<this.cols;y++)
				{

					temp.matrix[x][y] = this.matrix[x][y] + n;
				}
			}
		}
		return temp;
	}
	multiply(n)
	{
		
		if(n instanceof Matrix)
		{
			
			if(this.cols !== n.rows)
			{
				console.log("Colums of A must match rows rows of B to create product");
				return undefined;
			} 
			//product of 2 matrices
			var temp = new Matrix(this.rows,n.cols);
			for(let x=0;x<temp.rows;x++)
			{
				for(let y =0;y<temp.cols;y++)
				{
					var sum =0;
					for(var g=0;g<this.cols;g++)
					{
						sum+= this.matrix[x][g] * n.matrix[g][y];
						
					}

					temp.matrix[x][y] = sum;
				}	
			}
		}
		else
		{
			var temp = new Matrix(this.rows,this.cols);
			for(let x=0;x<this.rows;x++)
			{
				for(let y=0;y<this.cols;y++)
				{
					temp.matrix[x][y] = this.matrix[x][y] * n;
				}
			}
		}
		return temp;
	}
	transpose()
	{
		var temp = new Matrix(this.cols,this.rows);
		for(var i =0;i<temp.rows;i++)
		{
			for(var x=0;x<temp.cols;x++)
			{
				temp.matrix[i][x] = this.matrix[x][i];
			}
			
		}
		return temp;
		
	}
}
