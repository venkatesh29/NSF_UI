package fdfdfdfd;

public class Duplicate {

	public static void main(String[] args) {
		String s[]= {"Hey","Hello","Hi","Hey","Hello"};
		
		for(int i=0;i<s.length;i++) {
		   int counter=0;
			
		   String t=s[i],temp=null;
		  
			
		   for(int j=0;j<s.length;j++) {
				if(t.equalsIgnoreCase(s[j])) {
					counter++;
					temp=temp+"/"+j;
				}
		   }
			
		   
		   	System.out.println(temp+" "+counter);	
//			System.out.println(t+"  "+counter);
				
		}
	}

}
