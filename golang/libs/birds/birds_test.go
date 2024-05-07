package birds

import "testing"

func TestGetMostFrequentSighting(t *testing.T) {
	emptyArray := []int{}
	zeroValue := []int{0}
	negativeValue := []int{-1}
	birdSightings1 := []int{1, 1, 2, 2, 3}
	birdSightings2 := []int{1, 1, 2, 3, 2}
	birdSightings3 := []int{4, 1, 2, 2, 5}
	birdSightings4 := []int{4, 1, 2, 2, 5, 6, 2}
	birdSightings5 := []int{4, 1, 2, 2, 5, 6, 2, 1, 1}
	birdSightings6 := []int{2, 2, 1, 1, 3}

	type args struct {
		birds []int
	}
	tests := map[string]struct {
		args       args
		want       int
		wantErr    bool
		wantErrStr string
	}{
		// TODO: Add test cases.
		"empty array should throw an error": {
			args{
				birds: emptyArray,
			},
			-1,
			true,
			"insert a non-empty array",
		},
		"zero value should throw an error": {
			args{
				birds: zeroValue,
			},
			-1,
			true,
			"bird type ids must be >= 1",
		},
		"negative value should throw an error": {
			args{
				birds: negativeValue,
			},
			-1,
			true,
			"bird type ids must be >= 1",
		},
		"array 1 should return 1": {
			args{
				birds: birdSightings1,
			},
			1,
			false,
			"",
		},
		"array 2 should return 1": {
			args{
				birds: birdSightings2,
			},
			1,
			false,
			"",
		},
		"array 3 should return 2": {
			args{
				birds: birdSightings3,
			},
			2,
			false,
			"",
		},
		"array 4 should return 2": {
			args{
				birds: birdSightings4,
			},
			2,
			false,
			"",
		},
		"array 5 should return 1": {
			args{
				birds: birdSightings5,
			},
			1,
			false,
			"",
		},
		"array 6 should return 1": {
			args{
				birds: birdSightings6,
			},
			1,
			false,
			"",
		},
	}
	for name, tt := range tests {
		t.Run(name, func(t *testing.T) {
			got, err := GetMostFrequentSighting(tt.args.birds)
			if err != nil {
				if !tt.wantErr {
					t.Errorf("GetMostFrequentSighting() error = %v, wantErr %v", err, tt.wantErr)
					return
				}

				if err.Error() != tt.wantErrStr {
					t.Errorf("GetMostFrequentSighting() error string = %v, wantErrStr %v", err.Error(), tt.wantErrStr)
					return
				}
			} else {
				if tt.wantErr {
					t.Errorf("GetMostFrequentSighting() error = %v, wantErr %v", err, tt.wantErr)
					return
				}
			}

			if got != tt.want {
				t.Errorf("GetMostFrequentSighting() = %v, want %v", got, tt.want)
			}
		})
	}
}
